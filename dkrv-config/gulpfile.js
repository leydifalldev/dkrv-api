const { src, dest, series, watch, parallel } = require('gulp');
const seConfig = require("./path_config/se");
const placeConfig = require("./path_config/place");
const productConfig = require("./path_config/product");
const eventConfig = require("./path_config/event");
const exec = require('gulp-exec');
const path = require('path');
const multiDest = require('gulp-multi-dest');
//const searchEnginePath = 

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

function copyAndGeneratePlace(cb) {
  generate(placeConfig)
  cb();
}

function copyAndGenerateProduct(cb) {
  generate(productConfig)
  cb();
}

function copyAndGenerateEvent(cb) {
  generate(eventConfig)
  cb();
}

function updateSE(cb) {
  watch([seConfig.src_folder + seConfig.filename], copyAndGenerateSE);
  cb();
}

function updatePlace(cb) {
  watch([placeConfig.src_folder + placeConfig.filename], copyAndGeneratePlace);
  cb();
}

function updateProduct(cb) {
  watch([productConfig.src_folder + productConfig.filename], copyAndGenerateProduct);
  cb();
}

function updateEvent(cb) {
  watch([eventConfig.src_folder + eventConfig.filename], copyAndGenerateEvent);
  cb();
}

exports.watchse = series(copyAndGenerateSE, updateSE);
exports.watchplace = series(copyAndGeneratePlace, updatePlace);
exports.watchproduct = series(copyAndGenerateProduct, updateProduct);
exports.watchevent = series(copyAndGenerateEvent, updateEvent);
exports.default = series(copyAndGenerateSE, updateSE);