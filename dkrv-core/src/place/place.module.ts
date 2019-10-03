import { Module } from '@nestjs/common';
import { PlaceResolver } from '../api/resolvers/place.resolver';

@Module({
  providers: [PlaceResolver],
})
export class PlaceModule {}
