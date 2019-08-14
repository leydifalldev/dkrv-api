import { Injectable, OnModuleInit, HttpException, Logger } from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';
import productMapping from '../product/product.mapping';
import { SearchParams } from 'elasticsearch';
import { ID, DeleteResponse, DetailResponse } from 'src/types/common.defs';

@Injectable()
export class ElasticService implements OnModuleInit {
  protected readonly esclient: elasticsearch.Client;
  constructor(
    private host: string,
    private index: string,
    private type: string,
    private mapping: any,
    ) {
    this.esclient = new elasticsearch.Client({
      host: this.host, /*'http://elasticsearch_1:9200'*/
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

  async config() {
    try {
      const result = await this.esclient.indices.exists({ index: this.index });
      if (result) {
        Logger.log(this.index + 'index already exists');
      } else {
        Logger.log(this.index + ' does not exists ====> creating ...');
        const createIndexResult = await this.esclient.indices.create({index: this.index});
        if (createIndexResult && createIndexResult.acknowledged) {
          try {
            Logger.log(this.index + ' does not exists ====> creating ...');
            const updateMappingResult = await this.putMapping(this.mapping);
            Logger.log(this.index + ' creation result ====>');
            Logger.log(updateMappingResult);
          } catch (e) {
            Logger.log(this.index + ' error ', e);
          }
        }
      }
    } catch (e) {
      Logger.log('Error to set config', e);
    }
  }

  async putMapping(mappingSchema) {
    try {
      Logger.log('Creating Mapping index');
      const mappingResult = await this.esclient.indices.putMapping(mappingSchema);
      if (mappingResult) {
          Logger.log(mappingResult);
        } else {
          Logger.log('Successfully Created Index');
        }
    } catch (e) {
      Logger.log('Error=====>', e);
    }
  }

  getClient() {
    return this.esclient;
  }

  formatList(esresult) {
    const data = esresult.hits.hits.map((hit: any) => {
      hit._source.id = hit._id;
      return hit._source;
    });
    const resp: any = {
      total: data.length,
      data,
    };
    return resp;
  }

  async search(params: any): Promise<any> {
    const request: SearchParams = {
      index: this.index,
      type: this.type,
      q: params.q,
      from: params.from || 0,
      size: params.size || 10,
    };
    const result = await this.esclient.search(request);
    return this.formatList(result);
  }

  async add(params: any): Promise<ID> {
    Logger.log(params);
    const resp = await this.esclient.index({
      index: this.index,
      type: this.type,
      refresh: 'true',
      body: params,
    });
    Logger.log(resp);
    return {
      id: resp._id,
    };
  }

  async update(params) {
    try {
      const resp = await this.esclient.update({
        index: this.index,
        type: this.type,
        refresh: 'true',
        id: params.id,
        body: {
          doc: params,
        },
      });
      return resp;
    } catch (e) {
      Logger.log(e);
    }
  }

  async delete(id): Promise<DeleteResponse> {
    const resp = await this.esclient.delete({
      index: this.index,
      type: this.type,
      refresh: 'true',
      id,
    });
    return {
      id,
      msg: resp.result,
    };
  }

  async getDetail(id: string): Promise<DetailResponse> {
    try {
    Logger.log(id);
    const resp = await this.esclient.get({
      index: this.index,
      type: this.type,
      id,
    });
    return {
      status: 200,
      error: null,
      data: resp._source,
    };
    } catch (e) {
      Logger.log(e);
      this.searchErrorHandler(e);
    }
  }

  searchErrorHandler(e) {
    if (e.statusCode === 404) {
      return {
        status: 404,
        error: 'Place Not Found',
        data: [],
      };
    } else if (e.statusCode === 405) {
      return {
        status: 405,
        error: 'No request id Found',
        data: [],
      };
    }
  }
}
