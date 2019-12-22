import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import {
  PlaceResolver,
  ProductResolver,
  EventResolver,
  ProfileResolver,
} from './resolvers';
import {
  PlaceStore,
  ProductStore,
  ProfileStore,
  EventStore,
} from '../services';
import { UploadController } from './controllers/fileUploader';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  controllers: [UploadController],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schemas/schema.gql',
    }),
  ],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor,
    },
    PlaceStore,
    ProductStore,
    ProfileStore,
    EventStore,
    PlaceResolver,
    ProductResolver,
    ProfileResolver,
    EventResolver,
  ],
})
export class ApiModule {}
