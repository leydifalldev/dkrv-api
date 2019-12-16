import {
  Resolver,
  Query,
  Mutation,
  Args,
  ResolveProperty,
  Parent,
} from '@nestjs/graphql';

import { Logger } from '@nestjs/common';
import { Place, Product } from '../objects';
import { PlaceInput, SearchParamsInput } from '../inputs';
import { PlaceStore, ProductStore } from '../../services';
import { ServiceResponse } from '../../types/common.defs';
import { File } from '../objects';
import { Category } from '../objects/category.type';

@Resolver(of => Place)
export class PlaceResolver {
  constructor(
    private placeStore: PlaceStore,
    private productStore: ProductStore,
  ) {}

  @Query(returns => [Place])
  async places(): Promise<Place[]> {
    const response: ServiceResponse = await this.placeStore.search({});
    return response.payload || [];
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
  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
  @ResolveProperty('products', () => [Product!]!)
  async getProducts(
    @Parent() place,
    @Args('params') searchParams: SearchParamsInput,
  ) {
    Logger.log('ResolveProperty log');
    Logger.log(searchParams);
    const { id } = place;
    const response: ServiceResponse = await this.productStore.getProductsByPlace(
      {
        placeid: id,
        searchParams,
      },
    );
    return response.payload || [];
  }

  @ResolveProperty('products_grouped', () => [Category!]!)
  async getProductsGrouped(@Parent() place) {
    const { id } = place;
    const response: ServiceResponse = await this.productStore.getGroup(id);
    return response.payload || [];
  }
}
