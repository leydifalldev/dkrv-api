import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class ProductCreateResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => Boolean, { nullable: true })
  created: boolean;
}
