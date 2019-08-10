"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const REMOTE_SERVER = "0.0.0.0:9010";
//Load the protobuf
var proto = grpc.loadPackageDefinition(protoLoader.loadSync("protos/product.proto", {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
}));
let client = new proto.product.ProductService(REMOTE_SERVER, grpc.credentials.createInsecure());
client.getAll({}, (error, products) => {
    if (!error) {
        console.log('successfully fetch List notes');
        console.log(products);
    }
    else {
        console.error(error);
    }
});
