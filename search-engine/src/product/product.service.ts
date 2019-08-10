import { Injectable, Logger } from '@nestjs/common';
import { ElasticService } from '../elastic/elastic.service';
import { Product } from './product.interfaces';
import { DeleteResponse, ID } from 'src/types/common.defs';

@Injectable()
export class ProductService extends ElasticService {
  async addProduct(product: Product): Promise<ID> {
    Logger.log(product);
    const resp = await this.esclient.index({
      index: 'food',
      type: 'product',
      refresh: 'true',
      body: product,
    });
    Logger.log(resp);
    return {
      id: resp._id,
    };
  }

  async updateProduct(product) {
    const resp = await this.esclient.update({
      index: 'food',
      type: 'product',
      refresh: 'true',
      id: product.id,
      body: product,
    });
    return resp;
  }

  async deleteProduct(id): Promise<DeleteResponse> {
    const resp = await this.esclient.delete({
      index: 'food',
      type: 'product',
      refresh: 'true',
      id,
    });
    return {
      id,
      msg: resp.result,
    };
  }
}
