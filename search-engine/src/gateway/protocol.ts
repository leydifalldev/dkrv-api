import { Transport } from '@nestjs/microservices';
import { join } from 'path';

const PORT = process.env.SEARCH_ENGINE;

export const seGrpc = {
  transport: Transport.GRPC,
  options: {
    url: PORT,
    package: 'gateway',
    protoPath: join(__dirname, './gateway.proto'),
  },
};
