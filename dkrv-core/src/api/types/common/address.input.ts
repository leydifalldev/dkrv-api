import { Field, InputType } from 'type-graphql';
import { LocationInput } from './location.input';

@InputType()
export class AddressInput {
  @Field(type => String)
  full?: string;

  @Field(type => String, { nullable: true })
  zone?: string;

  @Field(type => [LocationInput], { nullable: true })
  location?: LocationInput;

  @Field(type => Boolean, { nullable: true })
  ocean?: boolean;
}
