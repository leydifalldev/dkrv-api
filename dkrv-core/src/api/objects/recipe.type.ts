import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Recipe {
  @Field(type => String)
  name?: string;

  @Field(type => String)
  code?: string;

  @Field(type => String, { nullable: true })
  quantity?: number;
}
