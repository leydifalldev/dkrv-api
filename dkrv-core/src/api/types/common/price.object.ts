import { Field, Float, ObjectType } from 'type-graphql';

@ObjectType()
export class Price {
  @Field(type => String)
  class: string;

  @Field(type => Float)
  value: number;
}
