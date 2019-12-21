import { Field, ObjectType, Int } from 'type-graphql';
import { Place } from './place.object';

@ObjectType()
export class PlaceListResponse {
  @Field(type => Int, { nullable: true })
  status?: number;

  @Field(type => Int, { nullable: true })
  total: number;

  @Field(type => String, { nullable: true })
  error?: string;

  @Field(type => [Place])
  payload: Place[];
}
