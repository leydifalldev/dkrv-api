const { src, dest, series, watch, parallel } = require("gulp");
const protoConfig = require("./protos/gateway.json");
const exec = require("gulp-exec");
const path = require("path");
const multiDest = require("gulp-multi-dest");
//const searchEnginePath =

const generate = config => {
  config.targets.map(target => {
    if (!target.go_proto) {
      return copy(config.src_folder + config.filename, target.dest_folder);
    }
    return copyAndGenerateProto(
      config.src_folder,
      target.dest_folder,
      config.filename,
      target.go_filename
    );
  });
};

function copy(source, destination) {
  return src(source, { allowEmpty: true }).pipe(
    multiDest(destination).on("error", error => console.log(error))
  );
}

const copyAndGenerateProto = (
  proto_path_folder,
  dest_folder,
  filename,
  out_filename
) => {
  const protoParams = {
    proto_path_folder,
    go_out_folder: path.join(__dirname, dest_folder),
    proto_path_file: proto_path_folder + filename
  };
  return copy(proto_path_folder + filename, dest_folder)
    .pipe(
      exec(
        "protoc --proto_path=<%= options.proto_path_folder %> \
  --go_out=plugins=grpc:<%= options.go_out_folder %> <%= options.proto_path_file %>",
        protoParams
      )
    )
    .on("error", error => console.log(error.message))
    .pipe(
      exec("protoc-go-inject-tag -XXX_skip=bson -input=<%= options.pb_go %>", {
        pb_go: dest_folder + out_filename
      })
    )
    .on("error", error => console.log(error.message));
};

function copyAndGenerateGatewayProto(cb) {
  generate(protoConfig);
  cb();
}

function updateProto(cb) {
  watch(
    [protoConfig.src_folder + protoConfig.filename],
    copyAndGenerateGatewayProto
  );
  cb();
}

exports.watchproto = series(copyAndGenerateGatewayProto, updateProto);
