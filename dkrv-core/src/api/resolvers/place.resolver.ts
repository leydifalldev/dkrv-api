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
import { PlaceInput } from '../inputs';
import { PlaceStore, ProductStore } from '../../services';
import { ServiceResponse } from '../../types/common.defs';
import { File } from '../objects';

@Resolver(of => Place)
export class PlaceResolver {
  constructor(
    private placeStore: PlaceStore,
    private productStore: ProductStore,
  ) {}

  @Query(returns => [Place])
  async places(): Promise<Place[]> {
    const response: ServiceResponse = await this.placeStore.search({});
    Logger.log(response);
    return response.payload || [];
  }

  @Query(returns => Place)
  async getPlace(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.placeStore.get(id);
    Logger.log(response);
    return response.payload;
  }

  @Mutation(returns => String)
  async createPlace(@Args('place') place: PlaceInput) {
    Logger.log(place);
    const response: ServiceResponse = await this.placeStore.add(place);
    Logger.log(response);
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
  async getProducts(@Parent() place) {
    Logger.log('ResolveProperty log');
    Logger.log(place);
    const { id } = place;
    const response: ServiceResponse = await this.productStore.getProductsByPlace(
      {
        placeid: id,
      },
    );
    Logger.log('ResolveProperty response log');
    Logger.log(response);
    return response.payload || [];
  }
}
