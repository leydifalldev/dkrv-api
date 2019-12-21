import { Field, InputType } from 'type-graphql';

@InputType()
export class RecipeInput {
  @Field(type => String)
  name?: string;

  @Field(type => String)
  code?: string;

  @Field(type => String, { nullable: true })
  quantity?: number;
}
