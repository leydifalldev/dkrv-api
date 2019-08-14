import { Controller, Logger, Param } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { DetailResponse, DeleteResponse, UpdateResponse, ID } from '../types/common.defs';
import { Place } from './place.interfaces';
import { PlaceService } from './place.service';

@Controller()
export class PlaceController {
  constructor(private placeService: PlaceService) {
  }

  @GrpcMethod('PlaceService', 'Search')
  async search(params): Promise<any> {
    const resp = await this.placeService.search(params);
    Logger.log(resp);
    return resp;
  }

  @GrpcMethod('PlaceService', 'AddPlace')
  async addPlace(place: Place): Promise<ID> {
    const response: ID = await this.placeService.add(place);
    Logger.log(response);
    return response;
  }

  @GrpcMethod('PlaceService', 'UpdatePlace')
  async updatePlace(place: Place): Promise<UpdateResponse> {
    const response: UpdateResponse = await this.placeService.update(place);
    Logger.log(response);
    return response;
  }

  @GrpcMethod('PlaceService', 'DeletePlace')
  async deletePlace(place: Place): Promise<DeleteResponse> {
    const response: DeleteResponse = await this.placeService.delete(place);
    Logger.log(response);
    return response;
  }

  @GrpcMethod('PlaceService', 'GetDetail')
  async getDetail(request: ID): Promise<DetailResponse> {
    const response: DetailResponse = await this.placeService.getDetail(request.id);
    return response;
  }
}
