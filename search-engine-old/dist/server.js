"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = require("grpc");
const protoLoader = require("@grpc/proto-loader");
const product_1 = require("./product");
const packageDefinition = protoLoader.loadSync('./protos/product.proto', {
    keepCase: true,
    longs: String,
    enums: String,
    defaults: true,
    oneofs: true
});
const products = [{ name: "test", price: 1 }, { name: "test", price: 12 }, { name: "hello", price: 15 }];
function getAll(call, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        let products = yield product_1.retrieveAll();
        console.log("getList", { products: products });
        callback(null, { products: products });
    });
}
function main() {
    const server = new grpc.Server();
    let productProto = grpc.loadPackageDefinition(packageDefinition).product;
    server.addService(productProto.ProductService.service, { getAll: getAll });
    server.bind("127.0.0.1:9500", grpc.ServerCredentials.createInsecure());
    console.log('SERVER RUNNING at http://127.0.0.1:9500');
    server.start();
}
main();
