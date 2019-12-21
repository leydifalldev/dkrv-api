import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

import { Logger } from '@nestjs/common';
import { PlaceStore, ProductStore, ServiceResponse } from '../../services';
import { Category, Place, ProductListResponse, PlaceListResponse, PlaceInput, SearchParams } from '../types';

@Resolver(of => Place)
export class PlaceResolver {
  constructor(
    private placeStore: PlaceStore,
    private productStore: ProductStore,
  ) {}

  @Query(returns => PlaceListResponse)
  async places(@Args() params: SearchParams){
    const response: ServiceResponse = await this.placeStore.retrieve(params);
    return response;
  }

  @Query(returns => Place)
  async getPlace(@Args('id') id: string) {
    const response: ServiceResponse = await this.placeStore.get(id);
    return response.payload;
  }

  @Mutation(returns => String)
  async createPlace(@Args('place') place: PlaceInput) {
    const response: ServiceResponse = await this.placeStore.add(place);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }
  @ResolveProperty('products', () => ProductListResponse!)
  async getProducts(
    @Parent() place,
    @Args() searchParams?: SearchParams,
  ) {
    const { id } = place;
    const response: ServiceResponse = await this.productStore.getProductsByPlace(id, searchParams);
    return response;
  }

  @ResolveProperty('products_grouped', () => [Category!]!)
  async getProductsGrouped(@Parent() place) {
    const { id } = place;
    const response: ServiceResponse = await this.productStore.getGroup(id);
    return response.payload || [];
  }
}
