import { Field, ObjectType } from 'type-graphql';
import { Location } from '../index';

@ObjectType()
export class Address {
  @Field(type => String, { nullable: true })
  full?: string;

  @Field(type => String, { nullable: true })
  zone?: string;

  @Field(type => [Location], { nullable: true })
  location?: Location;
}
