import { Field, Int, InputType } from 'type-graphql';

@InputType()
export class GastronomyInput {
  @Field(type => String)
  name: string;
  @Field(type => String)
  code: string;
}
