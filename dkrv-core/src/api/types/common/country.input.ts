import { Field, InputType } from 'type-graphql';

@InputType()
export class CountryInput {
  @Field(type => String)
  code: number;

  @Field(type => String)
  name: number;
}
