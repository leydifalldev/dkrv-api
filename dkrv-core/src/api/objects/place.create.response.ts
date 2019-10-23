import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class PlaceCreateResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => Boolean, { nullable: true })
  payload: string;
}
