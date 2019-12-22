import { Field, InputType, Float } from 'type-graphql';

@InputType()
export class PriceInput {
  @Field(type => String)
  class: string;

  @Field(type => Float)
  value: number;
}
