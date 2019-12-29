import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AccountSchema } from './index';
import { PlaceStore, ProductStore, UserStore, EventStore } from '../services';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Account', schema: AccountSchema }]),
  ],
  providers: [PlaceStore, ProductStore, UserStore, EventStore],
  exports: [PlaceStore, ProductStore, UserStore, EventStore],
})
export class ServicesModule {}
