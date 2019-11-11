import { Injectable } from '@nestjs/common';
import eventMapping from './event.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class EventStore extends ElasticService {
  constructor() {
    super('event', eventMapping);
  }
}
