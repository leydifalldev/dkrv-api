import { Field, Int, ObjectType, Float } from 'type-graphql';

@ObjectType()
export class Recipe {
  @Field(type => String)
  name?: string;

  @Field(type => String)
  code?: string;

  @Field(type => Float, { nullable: true })
  quantity?: number;
}
