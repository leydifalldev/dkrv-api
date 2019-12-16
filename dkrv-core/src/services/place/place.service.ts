import { Injectable } from '@nestjs/common';
import placeMapping from './place.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class PlaceStore extends ElasticService {
  constructor() {
    super('place', placeMapping);
  }

  getProductsCategories = placeid => {
    return this.search({
      body: {
        query: {
          bool: {
            must: {
              term: {
                placeid,
              },
            },
          },
        },
        aggs: {
          categories_group: {
            terms: {
              field: 'categories',
              size: 10,
            },
            aggs: {
              collection: {
                terms: {
                  field: 'collection',
                },
              },
            },
          },
        },
      },
      // tslint:disable-next-line:semicolon
    });
    // tslint:disable-next-line:semicolon
  };
}
