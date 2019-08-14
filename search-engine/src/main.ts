import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { join } from 'path';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5000',
      package: 'product',
      protoPath: join(__dirname, 'product/product.proto'),
    },
  });
  app.connectMicroservice({
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:5100',
      package: 'place',
      protoPath: join(__dirname, 'place/place.proto'),
    },
  });
  await app.startAllMicroservicesAsync();
  await app.listen(9500);
}
(async () => await bootstrap())();
