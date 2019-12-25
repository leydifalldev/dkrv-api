import { Field, InputType } from 'type-graphql';

@InputType()
export class CountryInput {
  @Field(type => String)
  code: string;

  @Field(type => String)
  name: string;
}
