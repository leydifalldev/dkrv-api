import { Field, InputType } from 'type-graphql';
import { ProfileInput } from './profile.input';

@InputType()
export class UserInput extends ProfileInput {
  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => String, { nullable: true })
  token?: string;
}
