import { Field, ObjectType, Int } from 'type-graphql';
import { Place } from './place.object';

@ObjectType()
export class PlaceDetailResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => Place)
  place: Place;
}
