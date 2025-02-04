import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class PlaceCreateResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => String, { nullable: true })
  payload: string;
}
