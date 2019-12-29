import { Injectable } from '@nestjs/common';
import {
  MongooseOptionsFactory,
  MongooseModuleOptions,
} from '@nestjs/mongoose';

@Injectable()
export class MongooseConfigService implements MongooseOptionsFactory {
  createMongooseOptions(): MongooseModuleOptions {
    return {
      uri: `mongodb://${process.env.DKRV_MONGO}`,
      option: { useNewUrlParser: true, useUnifiedTopology: true },
    };
  }
}
