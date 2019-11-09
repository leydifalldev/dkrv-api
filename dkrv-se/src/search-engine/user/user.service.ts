import { Injectable } from '@nestjs/common';
import userMapping from './user.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class UserStore extends ElasticService {
  constructor() {
    super('user', userMapping);
  }
}
