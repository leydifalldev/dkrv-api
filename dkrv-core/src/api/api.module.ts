import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLUpload } from 'graphql-upload';
import {
  PlaceResolver,
  ProductResolver,
  EventResolver,
  UserResolver,
} from './resolvers';
import { ServicesModule } from '../services/services.module';
import { Upload } from './types';

@Module({
  imports: [
    Upload,
    ServicesModule,
    GraphQLModule.forRoot({
      autoSchemaFile: './schemas/schema.gql',
      uploads: {
        maxFileSize: 10000000, // 10 MB
        maxFiles: 5,
      },
    }),
  ],
  providers: [PlaceResolver, ProductResolver, UserResolver, EventResolver],
})
export class ApiModule {}
