import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import {
  Place,
  PlaceCreateResponse,
  PlaceDetailResponse,
  PlaceListResponse,
} from '../objects';
import { PlaceInput } from '../inputs';
import { PlaceStore } from '../../services';
import { ServiceResponse } from '../../types/common.defs';

@Resolver(of => Place)
export class PlaceResolver {
  constructor(private placeStore: PlaceStore) {}

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
    const response: ServiceResponse = await this.placeStore.add(place);
    return response.payload;
  }

  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
}
