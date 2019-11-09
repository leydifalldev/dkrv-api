import { Field, ObjectType, Int } from 'type-graphql';
import { Place } from './place.object';

@ObjectType()
export class PlaceListResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => [Place])
  places: Place[];
}
