import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { LoggingInterceptor } from '../shared/logging.interceptor';
import { PlaceResolver } from './resolvers/place.resolver';
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
  ],
})
export class ApiModule {}
