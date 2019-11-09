import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

const path: string = join(__dirname, '../../proto/gateway.proto');

export const PlaceGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.DKRV_PLACE_PLACE || 'http://locahost:5200',
    package: 'gateway',
    protoPath: path,
  },
};

export const ProductGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.DKRV_PLACE_PRODUCT || 'http://locahost:5300',
    package: 'gateway',
    protoPath: path,
  },
};
