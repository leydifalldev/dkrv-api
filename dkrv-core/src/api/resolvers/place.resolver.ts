import { Resolver, Query, Mutation, Args, ResolveProperty, Parent } from '@nestjs/graphql';
import { Logger, OnModuleInit } from '@nestjs/common';
import { Client, ClientGrpc } from '@nestjs/microservices';
import { PlaceGrpcClientOptions, ProductGrpcClientOptions } from '../../gateway';
import { Observable } from 'rxjs';
import {
  Place,
  PlaceDeleteResponse,
  PlaceCreateResponse,
  PlaceUpdateResponse,
  PlaceDetailResponse,
  PlaceListResponse,
  Product,
} from '../objects';
import { PlaceInput } from '../inputs';
import { IPlaceService, IProductService } from '../interfaces';

@Resolver(of => Place)
export class PlaceResolver implements OnModuleInit {
  @Client(PlaceGrpcClientOptions) private readonly placeclient: ClientGrpc;
  private placeService: IPlaceService;
  @Client(ProductGrpcClientOptions) private readonly productclient: ClientGrpc;
  private productService: IProductService;

  onModuleInit() {
    this.placeService = this.placeclient.getService<IPlaceService>('PlaceService');
    this.productService = this.productclient.getService<IProductService>('ProductService');
  }

  @Query(returns => [Place])
  async places(): Promise<Place[]> {
    const response: PlaceListResponse = await this.placeService.search({}).toPromise();
    Logger.log(response);
    return response.places || [];
  }

  @Query(returns => Place)
  async getPlace(@Args('id') id: string) {
    Logger.log(id);
    const response: PlaceDetailResponse = await this.placeService.get({ id }).toPromise();
    Logger.log(response);
    return response.place;
  }

  @Mutation(returns => Boolean)
  async createPlace(@Args('place') place: PlaceInput) {
    Logger.log(place);
    const response: PlaceCreateResponse = await this.placeService.add({ place }).toPromise();
    Logger.log(response);
    return response.created;
  }

  @Mutation(returns => Boolean)
  async updatePlace(@Args('place') place: PlaceInput) {
    Logger.log(place);
    const response: PlaceUpdateResponse = await this.placeService.update({ place }).toPromise();
    Logger.log(response);
    return response.updated;
  }

  @Mutation(returns => Boolean)
  async deletePlace(@Args('id') id: string) {
    Logger.log(id);
    const response: PlaceDeleteResponse = await this.placeService.delete({ id }).toPromise();
    Logger.log(response);
    return response.deleted;
  }

  @ResolveProperty()
  async products(@Parent() place: Place) {
    const { id } = place;
    Logger.log(id);
    const response = await this.productService.getByQuery({ placeid: id }).toPromise();
    return response.products || [];
  }

  /*@ResolveProperty('product')
  async addProduct(@Args('id') product: ProductInput, @Parent() place: PlaceInput) {
    //const { id } = place;
    //return await this.postsService.findAll({ authorId: id });
  }*/
}
