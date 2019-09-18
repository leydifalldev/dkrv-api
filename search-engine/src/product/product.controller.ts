import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import {
  UpdateRequest,
  DeleteRequest,
  DetailRequest,
  DetailResponse,
  DeleteResponse,
  UpdateResponse,
  CreateResponse,
  CreateRequest,
  ListResponse,
  SearchParams } from '../types/common.defs';
import { Product } from './product.interfaces';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @GrpcMethod('ProductSearchEngine', 'Search')
  async search(params: SearchParams): Promise<ListResponse> {
    return await this.productService.search(params);
  }

  @GrpcMethod('ProductSearchEngine', 'AddProduct')
  async addProduct(request: CreateRequest<Product>): Promise<CreateResponse> {
    return await this.productService.add(request.payload);
  }

  @GrpcMethod('ProductSearchEngine', 'UpdateProduct')
  async updateProduct(req: UpdateRequest<Product>): Promise<UpdateResponse> {
    return await this.productService.update(req.payload);
  }

  @GrpcMethod('ProductSearchEngine', 'DeleteProduct')
  async deleteProduct(req: DeleteRequest): Promise<DeleteResponse> {
    return await this.productService.delete(req.id);
  }

  @GrpcMethod('ProductSearchEngine', 'GetDetail')
  async getDetail(request: DetailRequest): Promise<DetailResponse> {
    return await this.productService.get(request.id);
  }
}
