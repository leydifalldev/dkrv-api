import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import {
  Product,
  ProductInput,
  SearchParams,
  ProductDeleteResponse,
  ProductUpdateResponse,
  ProductDetailResponse,
  ProductListResponse,
} from '../types';
import { ProductStore, ServiceResponse } from '../../services';

@Resolver(of => Product)
export class ProductResolver {
  productService: any;
  constructor(private productStore: ProductStore) {}

  @Query(returns => ProductListResponse)
  async products(@Args() params: SearchParams): Promise<ServiceResponse> {
    const response: ServiceResponse = await this.productStore.retrieve(params);
    Logger.log(response);
    return response;
  }

  @Mutation(returns => [Product])
  async getProduct(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.productStore.get(id);
    return response.payload;
  }

  @Mutation(returns => String)
  async createProduct(@Args('product') product: ProductInput) {
    Logger.log(product);
    const response: ServiceResponse = await this.productStore.add(product);
    Logger.log(response);
    return response.payload;
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
