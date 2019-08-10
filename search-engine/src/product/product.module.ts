import { Module } from '@nestjs/common';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { ElasticModule } from '../elastic/elastic.module';
import { ElasticService } from '../elastic/elastic.service';

@Module({
  imports: [ElasticModule],
  controllers: [ProductController],
  providers: [ProductService, ElasticService],
})
export class ProductModule { }
