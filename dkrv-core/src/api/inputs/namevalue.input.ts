import { Field, InputType } from 'type-graphql';

@InputType()
export class NameValueInput {
  @Field(type => String)
  name?: string;

  @Field(type => String)
  value?: string;
}
