import { Field, Int, ObjectType } from 'type-graphql';
import { Country, Location, Picture, DateScalar } from '../index';

@ObjectType()
export class Event {
  @Field(type => String)
  id: string;

  @Field(type => String, { nullable: true })
  name?: string;

  @Field(type => String)
  email: string;

  @Field(type => Date, { nullable: true })
  start_date?: Date;

  @Field(type => String, { nullable: true })
  address?: string;
}
