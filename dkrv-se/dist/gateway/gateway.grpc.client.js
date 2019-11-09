"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
const path = path_1.join(__dirname, '../../proto/gateway.proto');
exports.PlaceGrpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: process.env.DKRV_PLACE_PLACE || 'http://locahost:5200',
        package: 'gateway',
        protoPath: path,
    },
};
exports.ProductGrpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: process.env.DKRV_PLACE_PRODUCT || 'http://locahost:5300',
        package: 'gateway',
        protoPath: path,
    },
};
//# sourceMappingURL=gateway.grpc.client.js.map