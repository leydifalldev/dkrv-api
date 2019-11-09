import { Module } from '@nestjs/common';
import { ProductStore } from './product/product.service';
import { PlaceStore } from './place/place.service';
import { SearchEngineController } from './elastic.controller';

@Module({
  controllers: [SearchEngineController],
  providers: [PlaceStore, ProductStore],
})
export class SearchEngineModule {}
