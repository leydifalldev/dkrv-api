import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { PlaceResolver } from './resolvers/place.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { PlaceStore, ProductStore, ProfilStore, EventStore } from '../services';
import { UploadController } from './controllers/fileUploader';
import { MulterModule } from '@nestjs/platform-express';
import { MulterConfigService } from '../services';

@Module({
  controllers: [UploadController],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schemas/schema.gql',
    }),
    MulterModule.registerAsync({
      useClass: MulterConfigService,
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    PlaceStore,
    ProductStore,
    ProfilStore,
    EventStore,
    PlaceResolver,
    ProductResolver,
  ],
})
export class ApiModule {}
