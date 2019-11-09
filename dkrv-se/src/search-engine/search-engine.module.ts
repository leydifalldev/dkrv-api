import { Module } from '@nestjs/common';
import { ProductStore } from './product/product.service';
import { PlaceStore } from './place/place.service';
import { SearchEngineController } from './elastic.controller';
import { UserStore } from './user/user.service';
import { EventStore } from './event/event.service';

@Module({
  controllers: [SearchEngineController],
  providers: [PlaceStore, ProductStore, EventStore, UserStore],
})
export class SearchEngineModule {}
