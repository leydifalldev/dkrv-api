import { Injectable } from '@nestjs/common';
import productMapping from './product.mapping';
import { ElasticService } from '../elastic.service';

@Injectable()
export class ProductStore extends ElasticService {
  constructor() {
    super('product', productMapping);
  }
}
