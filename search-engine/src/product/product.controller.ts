import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DetailResponse, DeleteResponse, UpdateResponse, ID } from '../types/common.defs';
import { Product } from './product.interfaces';
import { ProductService } from './product.service';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @GrpcMethod('ProductService', 'Search')
  async search(params): Promise<any> {
    const resp = await this.productService.search(params);
    Logger.log(resp);
    return resp;
  }

  @GrpcMethod('ProductService', 'AddProduct')
  async addProduct(product: Product): Promise<ID> {
    const response: ID = await this.productService.add(product);
    Logger.log(response);
    return response;
  }

  @GrpcMethod('ProductService', 'UpdateProduct')
  async updateProduct(product: Product): Promise<UpdateResponse> {
    const response: UpdateResponse = await this.productService.update(product);
    Logger.log(response);
    return response;
  }

  @GrpcMethod('ProductService', 'DeleteProduct')
  async deleteProduct(product: Product): Promise<DeleteResponse> {
    const response: DeleteResponse = await this.productService.delete(product);
    Logger.log(response);
    return response;
  }

  @GrpcMethod('ProductService', 'GetDetail')
  async getDetail(request: ID): Promise<DetailResponse> {
    const response: DetailResponse = await this.productService.getDetail(request.id);
    return response;
  }
}
