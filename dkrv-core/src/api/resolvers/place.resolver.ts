import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { grpcClientOptions } from '../../gateway/place.grpcclient';
import { Observable } from 'rxjs';
import {
  Place,
  PlaceDeleteResponse,
  PlaceCreateResponse,
  PlaceUpdateResponse,
  PlaceDetailResponse,
  PlaceListResponse,
} from '../objects';
import { PlaceInput, ProductInput } from '../inputs';

interface PlaceService {
  search({}): Observable<PlaceListResponse>;
  get(id): Observable<PlaceDetailResponse>;
  add(PlaceInput): Observable<PlaceCreateResponse>;
  update(PlaceInput): Observable<PlaceUpdateResponse>;
  delete(IdInput): Observable<PlaceDeleteResponse>;
}

@Resolver(of => Place)
export class PlaceResolver implements OnModuleInit {
  @Client(grpcClientOptions) private readonly client: ClientGrpc;
  private placeService: PlaceService;

  onModuleInit() {
    this.placeService = this.client.getService<PlaceService>('PlaceService');
  }

  @Query(returns => [Place])
  async places(): Promise<Place[]> {
    const response: PlaceListResponse = await this.placeService.search({}).toPromise();
    Logger.log(response);
    return response.places;
  }

  @Mutation(returns => PlaceDetailResponse)
  async getPlace(@Args('id') id: string) {
    Logger.log(id);
    const response: PlaceDetailResponse = await this.placeService.get({id}).toPromise();
    Logger.log(response);
    return response;
  }

  @Mutation(returns => PlaceCreateResponse)
  async createPlace(@Args('place') place: PlaceInput) {
    Logger.log(place);
    const response: PlaceCreateResponse = await this.placeService.add({place}).toPromise();
    Logger.log(response);
    return response;
  }

  @Mutation(returns => PlaceUpdateResponse)
  async updatePlace(@Args('place') place: PlaceInput) {
    Logger.log(place);
    const response: PlaceUpdateResponse = await this.placeService.update({place}).toPromise();
    Logger.log(response);
    return response;
  }

  @Mutation(returns => PlaceDeleteResponse)
  async deletePlace(@Args('id') id: string) {
    Logger.log(id);
    const response: PlaceDeleteResponse = await this.placeService.delete({id}).toPromise();
    Logger.log(response);
    return response;
  }

  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
}
