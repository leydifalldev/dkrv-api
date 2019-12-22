import { Field, ObjectType, Int } from 'type-graphql';
import { Event } from './event.object';

@ObjectType()
export class EventListResponse {
  @Field(type => Int, { nullable: true })
  status?: number;

  @Field(type => Int, { nullable: true })
  total: number;

  @Field(type => String, { nullable: true })
  error?: string;

  @Field(type => [Event])
  payload: Event[];
}
