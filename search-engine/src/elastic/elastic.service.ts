import { Injectable, OnModuleInit, HttpException, Logger } from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';
import { SearchParams } from 'elasticsearch';
import { CreateResponse, UpdateResponse, DeleteResponse, DetailResponse, ListResponse } from 'src/types/common.defs';

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
      host: process.env.ELASTICSEARCH_PRIMARY || 'http://localhost:9200',
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
        const createIndexResult = await this.esclient.indices.create({ index: this.index });
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
        Logger.log('mapping creation successfully');
        Logger.log(mappingResult);
      } else {
        Logger.log('Cannot create mapping');
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

  async search(params: any): Promise<ListResponse> {
    const request: SearchParams = {
      index: this.index,
      _source: true,
      type: this.type,
      q: params.q,
      from: params.from || 0,
      size: params.size || 10,
    };
    try {
      const resp = await this.esclient.search(request);
      Logger.log(resp);
      return {
        total: resp.hits.hits.length,
        products: resp.hits.hits.map(hit => hit._source),
        status: 200,
        error: 'none',
      };
    } catch (e) {
      Logger.log(e);
      return {
        total: 0,
        products: null,
        status: 500,
        error: 'level-4',
      };
    }
  }

  async add(params: any): Promise<CreateResponse> {
    try {
      const resp = await this.esclient.create({
        index: this.index,
        type: this.type,
        id: params.id,
        refresh: 'true',
        body: params,
      });
      Logger.log(resp);
      return {
        id: resp._id,
        payload: (resp.result === 'created'),
        status: 200,
        error: 'none',
      };
    } catch (e) {
      Logger.log(e);
      return {
        id: null,
        payload: false,
        status: e.statusCode,
        error: 'level-4',
      };
    }
  }

  async update(params): Promise<UpdateResponse> {
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
      return {
        status: 200,
        error: 'none',
        payload: (resp.result === 'updated'),
      };
    } catch (e) {
      Logger.log(e);
      return {
        status: e.statusCode,
        error: 'none',
        payload: null,
      };
    }
  }

  async delete(id: string): Promise<DeleteResponse> {
    try {
      const resp = await this.esclient.delete({
        index: this.index,
        type: this.type,
        refresh: 'true',
        id,
      });
      Logger.log(resp);
      return {
        status: 200,
        error: 'none',
        payload: (resp.result === 'deleted'),
      };
    } catch (e) {
      Logger.log(e);
      return {
        status: 500,
        payload: null,
        error: 'level-4',
      };
    }
  }

  async get(id: string): Promise<DetailResponse> {
    try {
      const resp = await this.esclient.get({
        index: this.index,
        type: this.type,
        id,
      });
      //Logger.log(resp);
      return {
        status: 200,
        error: null,
        payload: resp._source,
      };
    } catch (e) {
      Logger.log(e);
      return {
        status: e.statusCode,
        error: 'level-4',
        payload: null,
      };
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
