import { Field, InputType, Int } from 'type-graphql';

@InputType()
export class CategoryInput {
  @Field(type => String)
  name: string;

  @Field(type => Int, { nullable: true })
  count: number;

  @Field(type => [CategoryInput], { nullable: true })
  children: CategoryInput[];
}
