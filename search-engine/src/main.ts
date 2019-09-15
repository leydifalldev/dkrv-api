import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { seGrpc } from './gateway/protocol';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.connectMicroservice(seGrpc);
  await app.startAllMicroservicesAsync();
  await app.listen(9500);
}
(async () => await bootstrap())();
