import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { PlaceResolver } from './resolvers/place.resolver';
import { ProductResolver } from './resolvers/product.resolver';
import { PlaceStore } from '../search-engine/place/place.service';

@Module({
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
    PlaceResolver,
    ProductResolver,
    PlaceStore,
  ],
})
export class ApiModule {}
