import { Transport, ClientOptions } from '@nestjs/microservices';
import { join } from 'path';

export const PlaceGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.DKRV_PLACE_PLACE,
    package: 'gateway',
    protoPath: join(__dirname, './gateway.proto'),
  },
};

export const ProductGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    url: process.env.DKRV_PLACE_PRODUCT,
    package: 'gateway',
    protoPath: join(__dirname, './gateway.proto'),
  },
};
