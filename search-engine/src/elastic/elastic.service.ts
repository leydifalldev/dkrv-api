import { Injectable, OnModuleInit, HttpException, Logger } from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';
import { ListResponse } from '../types/common.defs';

@Injectable()
export class ElasticService implements OnModuleInit {
  protected readonly esclient: elasticsearch.Client;
  constructor() {
    this.esclient = new elasticsearch.Client({
      host: 'http://localhost:9200'/*'http://elasticsearch_1:9200'*/, // replace with your cluster endpoint
    });
  }

  onModuleInit() {
    this.config();
  }

  ping() {
    this.esclient.ping({ requestTimeout: 3000 })
      .catch(err => {
        throw new HttpException({
          status: 'error',
          message: 'Unable to reach Elasticsearch cluster',
        }, 500);
      });
  }

  config() {
    try {
      this.esclient.indices.exists({ index: 'food' }, (err, res, status) => {
        if (res) {
          Logger.log('index already exists');
        } else {
          this.esclient.indices.create({
            index: 'food',
          }, (error: any, result: any, stat: any) => {
            Logger.log(error, result, status);
            this.putMapping();
          });
        }
      });
    } catch (e) {
      Logger.log('Error to set config', e);
    }
  }

  async putMapping() {
    try {
      Logger.log('Creating Mapping index');
      this.esclient.indices.putMapping({
        index: 'food',
        type: 'product',
        body: {
          properties: {
            name: {
              type: 'text',
            },
            place_logo: {
              type: 'text',
            },
            price: {
              type: 'long',
            },
            phone: {
              type: 'text',
            },
            description: {
              type: 'text',
            },
            cooking_time: {
              type: 'integer',
            },
            location: {
              type: 'geo_point',
            },
            address: {
              type: 'text',
            },
            likes: {
              type: 'integer',
            },
            recipes: {
              type: 'nested',
            },
            place_name: {
              type: 'text',
            },
            place_ref: {
              type: 'text',
            },
            menus_link: {
              type: 'nested',
            },
            notation: {
              type: 'integer',
            },
            discount: {
              type: 'float',
            },
            size: {
              type: 'text',
            },
            quantity: {
              type: 'text',
            },
            spicy_level: {
              type: 'text',
            },
            category: {
              type: 'text',
            },
            pictures: {
              type: 'nested',
            },
            main_picture: {
              type: 'integer',
            },
            schedule: {
              type: 'nested',
            },
          },
        },
      }, (err, resp, status) => {
        if (err) {
          Logger.log(err, status);
        } else {
          Logger.log('Successfully Created Index', status, resp);
        }
      });
    } catch (e) {
      Logger.log('Error=====>', e);
    }
  }

  getClient() {
    return this.esclient;
  }

  async search(index: string, body: any): Promise<ListResponse> {
    const result = await this.esclient.search({ index, body });
    Logger.log('search result');
    Logger.log(result);
    const data = result.hits.hits.map((hit: any) => {
      hit.id = hit._id;
      return hit;
    });
    const resp: any = {
      total: data.length,
      data,
    };
    return resp;
  }
}
