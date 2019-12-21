import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { PlaceResolver, ProductResolver, EventResolver } from './resolvers';
import { PlaceStore, ProductStore, ProfilStore, EventStore } from '../services';
import { UploadController } from './controllers/fileUploader';
import { MulterModule } from '@nestjs/platform-express';
import { DateScalar } from './types';

@Module({
  controllers: [UploadController],
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: './schemas/schema.gql'
    })
  ],
  providers: [
    DateScalar,
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
    EventResolver,
  ],
})
export class ApiModule {}
