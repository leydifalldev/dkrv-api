import { Field, Int, InputType } from 'type-graphql';
import { LocationInput } from './location.input';

@InputType()
export class PlaceInput {
  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => String, { nullable: true })
  logo?: string;

  @Field(type => String, { nullable: true })
  phone: string;

  @Field({ nullable: true })
  email?: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => String, { nullable: true })
  gastronomie?: string[];

  @Field(type => LocationInput, { nullable: true })
  location?: LocationInput;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => Int, { nullable: true })
  travelTime?: number;

  @Field(type => Boolean, { nullable: true })
  oceanNear?: boolean;

  @Field(type => Boolean, { nullable: true })
  temporalyPlace?: boolean;
}
