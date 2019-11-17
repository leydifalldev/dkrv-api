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
import { File } from '../objects';
import { Upload } from '../inputs/upload.input';

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
    Logger.log(place);
    const response: ServiceResponse = await this.placeStore.add(place);
    Logger.log(response);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }

  @Mutation(returns => File)
  async uploadPictures(@Args('pictures') pictures: [Upload!]!)  {
    Logger.log(pictures);
    //const response: ServiceResponse = await this.placeStore.add(place);
    //Logger.log(response);
    /*if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
    */
  }
  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
}
