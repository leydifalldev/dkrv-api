import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const PORT = process.env.SEARCH_ENGINE;

export const seGrpc = {
  transport: Transport.GRPC,
  options: {
    url: PORT,
    package: 'product',
    protoPath: join(__dirname, './proto/product.proto'),
  },
};
