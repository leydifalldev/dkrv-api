import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { Logger } from '@nestjs/common';
import { Event, SearchParams, EventInput, EventListResponse } from '../types';
import { EventStore, ServiceResponse } from '../../services';

@Resolver(of => Event)
export class EventResolver {
  constructor(private eventStore: EventStore) {}

  @Query(returns => EventListResponse)
  async events(@Args() params: SearchParams): Promise<ServiceResponse> {
    const response: ServiceResponse = await this.eventStore.retrieve(params);
    Logger.log(response);
    return response;
  }

  @Mutation(returns => [Event])
  async getEvent(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.eventStore.get(id);
    return response.payload;
  }

  @Mutation(returns => String)
  async createEvent(@Args() event: EventInput) {
    Logger.log(event);
    const test = {
      name: 'hello date',
      start_date: new Date(),
    };
    const response: ServiceResponse = await this.eventStore.add(test);
    Logger.log(response);
    return response.payload;
  }
}
