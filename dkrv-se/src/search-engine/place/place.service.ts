import { Injectable } from '@nestjs/common';
import placeMapping from './place.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class PlaceStore extends ElasticService {
  constructor() {
    super('place', placeMapping);
  }
}
