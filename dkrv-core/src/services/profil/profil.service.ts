import { Injectable } from '@nestjs/common';
import profilMapping from './profil.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class ProfilStore extends ElasticService {
  constructor() {
    super('profil', profilMapping);
  }
}
