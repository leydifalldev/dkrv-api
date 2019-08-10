import { ClientOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';

export const grpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options: {
    package: 'product',
    protoPath: join(__dirname, './product.proto'),
    loader: {
      includeDirs: [join(__dirname, '../../src/product')],
    },
  },
};
