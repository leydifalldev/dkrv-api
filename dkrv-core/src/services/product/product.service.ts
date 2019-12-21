import { Injectable, Logger } from '@nestjs/common';
import productMapping from './product.mapping';
import { ElasticService } from '../elastic.service';
import { response } from 'express';

@Injectable()
export class ProductStore extends ElasticService {
  constructor() {
    super('product', productMapping);
  }

  getProductsByPlace(placeid, searchParams) {
    const { match, size, from, q } = searchParams;
    const req = {
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
    };
    return this.search(req);
  }

  async getGroup(placeid) {
    Logger.log('placeid LOGGGGGG');
    Logger.log(placeid);
    const req = {
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
          group: {
            terms: {
              field: 'categories',
              size: 10,
            },
            aggs: {
              collections: {
                terms: {
                  field: 'collection',
                },
              },
            },
          },
        },
      },
      // tslint:disable-next-line:semicolon
    };
    // tslint:disable-next-line:semicolon
    const { body } = await this.esclient.search(req);
    Logger.log('req LOGGGGGG');
    Logger.log(body);
    const resp = body.aggregations.group.buckets.map(group => {
      return {
        name: group.key,
        count: group.doc_count,
        children: group.collections.buckets.map(collection => {
          return {
            name: collection.key,
            count: collection.doc_count,
          };
        }),
      };
    });
    return {
      payload: resp,
      status: body.statusCode,
      error: body.error,
    };
  }
}
