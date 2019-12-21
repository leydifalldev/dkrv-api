import {
  Resolver,
  Mutation,
  Args,
} from '@nestjs/graphql';

import { EventStore } from '../../services';
import { ServiceResponse } from '../../types/common.defs';
import { Place, EventInput } from '../types';

@Resolver(of => Place)
export class EventResolver {
  constructor(
    private eventStore: EventStore,
  ) {}

  @Mutation(returns => String)
  async createEvent(@Args('event') event: EventInput) {
    const response: ServiceResponse = await this.eventStore.add(event);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }
}
