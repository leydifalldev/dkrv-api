import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { ProductGrpcClientOptions } from '../../gateway/gateway.grpc.client';
import { Observable } from 'rxjs';
import {
  Product,
  ProductDeleteResponse,
  ProductUpdateResponse,
  ProductCreateResponse,
  ProductDetailResponse,
  ProductListResponse,
} from '../objects';
import { ProductInput } from '../inputs';
import { IProductService } from '../interfaces';
import { ServiceResponse } from '../../types/common.defs';
import { ProductStore } from '../../services';

@Resolver(of => Product)
export class ProductResolver implements OnModuleInit {
  constructor(private productStore: ProductStore) {}

  @Client(ProductGrpcClientOptions) private readonly client: ClientGrpc;
  private productService: IProductService;

  onModuleInit() {
    this.productService = this.client.getService<IProductService>(
      'ProductService',
    );
  }

  @Query(returns => [Product])
  async products(): Promise<Product[]> {
    const response: ProductListResponse = await this.productService
      .search({})
      .toPromise();
    Logger.log(response);
    return response.products || [];
  }

  @Mutation(returns => ProductDetailResponse)
  async getProduct(@Args('id') id: string) {
    Logger.log(id);
    const response: ProductDetailResponse = await this.productService
      .get({ id })
      .toPromise();
    Logger.log(response);
    return response;
  }

  @Mutation(returns => String)
  async createProduct(@Args('product') product: ProductInput) {
    Logger.log(product);
    const response: ServiceResponse = await this.productStore.add(product);
    Logger.log(response);
    return response.payload;
  }

  @Mutation(returns => ProductUpdateResponse)
  async updateProduct(@Args('product') product: ProductInput) {
    Logger.log(product);
    const response: ProductUpdateResponse = await this.productService
      .update({ product })
      .toPromise();
    Logger.log(response);
    return response;
  }

  @Mutation(returns => ProductDeleteResponse)
  async deleteProduct(@Args('id') id: string) {
    Logger.log(id);
    const response: ProductDeleteResponse = await this.productService
      .delete({ id })
      .toPromise();
    Logger.log(response);
    return response;
  }

  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
}
