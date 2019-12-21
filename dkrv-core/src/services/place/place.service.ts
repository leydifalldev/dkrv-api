import { Injectable } from '@nestjs/common';
import placeMapping from './place.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class PlaceStore extends ElasticService {
  constructor() {
    super('place', placeMapping);
  }

  getProductsCategories = params => {
    const { match, size, from, q } = params;
    return this.search({
      body: {
        query: {
          bool: {
            must: this.buildTerms(match),
          },
        },
      },
      q: q,
      size: size || 10,
      from: from || 0,
      // tslint:disable-next-line:semicolon
    });
    // tslint:disable-next-line:semicolon
  };
}
