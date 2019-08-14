import { Injectable, Logger } from '@nestjs/common';
import placeMapping from './place.mapping';
import { ElasticService } from '../elastic/elastic.service';

@Injectable()
export class PlaceService extends ElasticService {
  constructor() {
    super('http://localhost:9200', 'place', 'food', placeMapping);
  }
}
