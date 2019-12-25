import { Field, InputType } from 'type-graphql';

@InputType()
export class ContactInput {
  @Field(type => String)
  phone?: string;

  @Field(type => String)
  email?: string;
}
