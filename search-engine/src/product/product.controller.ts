import { Controller, Logger } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DeleteResponse, ID } from '../types/common.defs';
import { Product } from './product.interfaces';
import { ProductService } from '../product/product.service';

@Controller()
export class ProductController {
  constructor(private productService: ProductService) {
  }

  @GrpcMethod('ProductService', 'GetAll')
  async getAll(): Promise<any> {
    const body = {
      size: 200,
      from: 0,
      query: {
        match_all: {},
      },
    };
    const resp = await this.productService.search('food', body);
    Logger.log(resp);
    return resp;
  }

  @GrpcMethod('ProductService', 'AddProduct')
  async addProduct(product: Product): Promise<ID> {
    const response: ID = await this.productService.addProduct(product);
    Logger.log(response);
    return response;
  }
  @GrpcMethod('ProductService', 'UpdateProduct')
  async updateProduct(product: Product): Promise<Product> {
    const response: Product = await this.productService.updateProduct(product);
    Logger.log(response);
    return response;
  }
  @GrpcMethod('ProductService', 'DeleteProduct')
  async deleteProduct(product: Product): Promise<DeleteResponse> {
    const response: DeleteResponse = await this.productService.deleteProduct(product);
    Logger.log(response);
    return response;
  }
}
