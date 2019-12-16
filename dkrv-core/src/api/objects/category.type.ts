import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Category {
  @Field(type => String)
  name: string;

  @Field(type => Int, { nullable: true })
  count: number;

  @Field(type => [Category], { nullable: true })
  children: Category[];
}
