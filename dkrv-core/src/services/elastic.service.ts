import {
  Injectable,
  OnModuleInit,
  HttpException,
  Logger,
  HttpStatus,
} from '@nestjs/common';
import {
  Client,
  // Object that contains the type definitions of every API method
  RequestParams,
  // Interface of the generic API response
  ApiResponse,
} from '@elastic/elasticsearch';
import { ServiceResponse } from '../types/common.defs';
import { ProductInput, PlaceInput } from '../api/inputs';
import { throwError } from 'rxjs';

export class ElasticService implements OnModuleInit {
  protected readonly esclient: Client;
  constructor(private index: string, private mapping: any) {
    this.esclient = new Client({
      node: process.env.ELASTICSEARCH_PRIMARY || 'http://localhost:5800',
    });
  }

  onModuleInit() {
    this.config();
  }

  async config() {
    try {
      const result = await this.esclient.indices.exists({ index: this.index });
      if (result.statusCode === 404) {
        Logger.log(this.index + ' does not exists ====> creating ...');
        const createIndexResult = await this.esclient.indices.create({
          index: this.index,
        });
        if (createIndexResult.statusCode === 200) {
          try {
            Logger.log('CREATE MAPPING IN PROGRESS ...');
            await this.putMapping(this.mapping);
          } catch (e) {
            Logger.log(this.index + ' error ', e);
          }
        } else {
          Logger.log(`CREATE INDEX FAILED for ${this.index}`);
        }
      } else {
        Logger.log(this.index + ' INDEX ALREADY EXISTS');
      }
    } catch (e) {
      Logger.log('Error to set config', e);
    }
  }

  async putMapping(mappingSchema) {
    try {
      Logger.log('Creating Mapping index');
      Logger.log(mappingSchema);
      const mappingResult = await this.esclient.indices.putMapping(
        mappingSchema,
      );
      Logger.log('mappingResult LOG');
      Logger.log(mappingResult);
      Logger.log(mappingResult.statusCode === HttpStatus.OK);
      if (mappingResult.statusCode === HttpStatus.OK) {
        Logger.log(`MAPPING SUCCESSFULLY ADDED for ${mappingSchema.index}`);
      } else {
        throw new Error('Cannot create mapping');
      }
    } catch (e) {
      Logger.log('Error =====> ', e);
    }
  }

  getClient() {
    return this.esclient;
  }

  toListResponse(hits) {
    const data = hits.hits.map((hit: any) => {
      hit._source.id = hit._id;
      return { id: hit._id, ...hit._source };
    });
    return {
      status: 200,
      error: null,
      total: data.length,
      payload: data,
    };
  }

  async search(params: any): Promise<ServiceResponse> {
    const request: RequestParams.Search<SearchBody> = {
      index: this.index,
      q: params.q,
      from: params.from || 0,
      size: params.size || 10,
      body: params.body,
    };
    try {
      const result: ApiResponse<
        SearchResponse<any>
      > = await this.esclient.search(request);
      const {
        body: { hits },
      } = result;
      return this.toListResponse(hits);
    } catch (e) {
      Logger.log(e);
      return {
        total: 0,
        payload: null,
        status: e.statusCode,
        error: 'level-4',
      };
    }
  }

  async add(params: any): Promise<ServiceResponse> {
    Logger.log(params);
    try {
      const resp = await this.esclient.index({
        index: this.index,
        refresh: 'true',
        body: params,
      });
      Logger.log('resp log', resp.body);
      return {
        payload: resp.body._id,
        status: 200,
        error: 'none',
      };
    } catch (e) {
      Logger.log('error', e);
      return {
        payload: null,
        status: e.statusCode,
        error: 'level-4',
      };
    }
  }

  async update(params): Promise<ServiceResponse> {
    try {
      const resp = await this.esclient.update({
        index: this.index,
        refresh: 'true',
        id: params.id,
        body: {
          doc: params,
        },
      });
      return {
        status: 200,
        error: 'none',
        payload: resp.body._source,
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

  async delete(id: string): Promise<ServiceResponse> {
    try {
      const resp = await this.esclient.delete({
        index: this.index,
        refresh: 'true',
        id,
      });
      Logger.log(resp);
      return {
        status: 200,
        error: 'none',
        payload: resp.body._source,
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

  async get(id: string): Promise<ServiceResponse> {
    try {
      const { body, statusCode } = await this.esclient.get({
        index: this.index,
        id,
      });
      Logger.log('body get', body);
      return {
        status: statusCode,
        error: null,
        payload: { ...body._source, id },
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
