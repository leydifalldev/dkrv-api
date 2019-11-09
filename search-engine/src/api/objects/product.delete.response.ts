import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class ProductDeleteResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => Boolean, { nullable: true })
  deleted: boolean;
}
