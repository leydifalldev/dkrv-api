import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class PlaceUpdateResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => Boolean, { nullable: true })
  updated: boolean;
}
