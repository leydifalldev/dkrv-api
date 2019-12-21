import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class ProductUpdateResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => Boolean, { nullable: true })
  updated: boolean;
}
