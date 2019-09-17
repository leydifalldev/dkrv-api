const { src, dest, series, watch, parallel } = require('gulp');
const exec = require('gulp-exec');
const path = require('path');
const clean = require('gulp-clean');
const multiDest = require('gulp-multi-dest');
//const searchEnginePath = 

const seConfig = {
  filename: 'search-engine.proto',
  src_folder: 'proto/search-engine/',
  //path: ['../search-engine/src/gateway/proto/', '../dkrv-place/gateway/search-engine/'],
  targets: [
    {
      name: "dkrv-core-se",
      go_proto: true,
      dest_folder: '../dkrv-core/gateway/se/'
    },
    {
      name: "dkrv-place-se",
      go_proto: true,
      dest_folder: '../dkrv-place/gateway/se/'
    },
    {
      name: "search-engine",
      go_proto: false,
      dest_folder: '../search-engine/src/gateway/proto/'
    }
  ],
};

const placeConfig = {
  filename: 'place.proto',
  src_folder: 'proto/dkrv-place/',
  //path: ['../search-engine/src/gateway/proto/', '../dkrv-place/gateway/search-engine/'],
  targets: [
    {
      name: "dkrv-place-place",
      go_proto: true,
      dest_folder: '../dkrv-place/place/'
    },
    {
      name: "dkrv-core-place",
      go_proto: true,
      dest_folder: '../dkrv-core/gateway/place/'
    }
  ],
};

const eventConfig = {
  filename: 'event.proto',
  src_folder: 'proto/dkrv-place/',
  //path: ['../search-engine/src/gateway/proto/', '../dkrv-place/gateway/search-engine/'],
  targets: [
    {
      name: "dkrv-place-event",
      go_proto: true,
      dest_folder: '../dkrv-place/event/'
    },
    {
      name: "dkrv-core-event",
      go_proto: true,
      dest_folder: '../dkrv-core/gateway/event/'
    }
  ],
};

const generate = (config) => {
  config.targets.map(target => {
    if (!target.go_proto) {
      return copy(config.src_folder + config.filename, target.dest_folder);
    }
    return copyAndGenerateProto(config.src_folder, target.dest_folder, config.filename);
  });
}

function copy(source, destination) {
  return src(source, { allowEmpty: true })
    .pipe(multiDest(destination).on('error', error => console.log(error)));
}

const copyAndGenerateProto = (proto_path_folder, dest_folder, filename) => {
  const protoParams = {
    proto_path_folder,
    go_out_folder: path.join(__dirname, dest_folder),
    proto_path_file: proto_path_folder + filename,
  };
  return copy(proto_path_folder + filename, dest_folder)
    .pipe(exec('protoc --proto_path=<%= options.proto_path_folder %> \
  --go_out=plugins=grpc:<%= options.go_out_folder %> <%= options.proto_path_file %>', protoParams))
    .on('error', error => console.log(error.message));
}

function copyAndGenerateSE(cb) {
  generate(seConfig)
  cb();
}

function copyAndGenerateEvent(cb) {
  generate(eventConfig)
  cb();
}

function copyAndGeneratePlace(cb) {
  generate(placeConfig)
  cb();
}

function updateSE(cb) {
  watch([seConfig.src_folder + seConfig.filename], copyAndGenerateSE);
  cb();
}

function updateEvent(cb) {
  watch([eventConfig.src_folder + eventConfig.filename], copyAndGenerateEvent);
  cb();
}

function updatePlace(cb) {
  watch([placeConfig.src_folder + placeConfig.filename], copyAndGenerateEvent);
  cb();
}

exports.watchse = series(copyAndGenerateSE, updateSE);
exports.watchevent = series(copyAndGenerateEvent, updateEvent);
exports.watchplace = series(copyAndGeneratePlace, updatePlace);
exports.default = series(copyAndGenerateSE, updateSE);