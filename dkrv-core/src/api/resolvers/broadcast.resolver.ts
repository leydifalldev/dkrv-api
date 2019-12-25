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
  Cast,
} from '../types';
import { ProductStore, ServiceResponse } from '../../services';

@Resolver(of => Cast)
export class BroadCastResolver {
  productService: any;
  constructor(private productStore: ProductStore) {}

  @Query(returns => ProductListResponse)
  async products(@Args() params: SearchParams): Promise<ServiceResponse> {
    const response: ServiceResponse = await this.productStore.retrieve(params);
    Logger.log(response);
    return response;
  }

  @Query(returns => ProductListResponse)
  async getProductCollection(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.productStore.get(id);
    return response.payload;
  }

  @Query(returns => ProductListResponse)
  async getPlaceCollection(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.productStore.get(id);
    return response.payload;
  }

  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
}
