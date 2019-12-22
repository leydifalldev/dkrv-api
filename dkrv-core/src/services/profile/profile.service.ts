import { Injectable } from '@nestjs/common';
import profileMapping from './profile.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class ProfileStore extends ElasticService {
  constructor() {
    super('profile', profileMapping);
  }
}
