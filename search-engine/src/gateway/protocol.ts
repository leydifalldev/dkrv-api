import { Transport } from '@nestjs/microservices';
import { join } from 'path';

export const seGrpc = {
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5000',
    package: 'se',
    protoPath: join(__dirname, './proto/search-engine.proto'),
  },
};
