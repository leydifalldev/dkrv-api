import { Injectable, Logger } from '@nestjs/common';
import productMapping from './product.mapping';
import { ElasticService } from '../elastic/elastic.service';

@Injectable()
export class ProductService extends ElasticService {
  constructor() {
    super('http://localhost:9200', 'food', 'product', productMapping);
  }
}
