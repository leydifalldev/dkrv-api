import { Module } from '@nestjs/common';
import { ProductStore } from './product/product.service';
import { PlaceStore } from './place/place.service';
import { UserStore } from './user/user.service';
import { EventStore } from './event/event.service';

@Module({
  providers: [],
})
export class SearchEngineModule {}
