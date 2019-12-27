import { Field, ObjectType } from 'type-graphql';
import {
  Price,
  Profile,
  Picture,
  Ranking,
  Contact,
  Address,
  Media,
} from '../index';
import { Place } from '../place/place.object';

@ObjectType()
export class Event {
  @Field(type => String)
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => String)
  start?: string;

  @Field(type => String, { nullable: true })
  end: string;

  @Field(type => String, { nullable: true })
  description: string;

  @Field(type => Contact)
  contact: Contact;

  @Field(type => [Price], { nullable: true })
  prices?: Price[];

  @Field(type => [String])
  categories: string[];

  @Field(type => [String], { nullable: true })
  tags: string[];

  @Field(type => [Place], { nullable: true })
  place: Place[];

  @Field(type => Address)
  address: Address;

  @Field(type => Ranking, { nullable: true })
  ranking?: Ranking;

  @Field(type => [Profile], { nullable: true })
  artists?: Profile[];

  @Field(type => [Profile], { nullable: true })
  hosts?: Profile[];

  @Field(type => [Picture], { nullable: true })
  pictures?: Media[];

  @Field(type => String, { nullable: true })
  CREATED_AT?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_DATE?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_USER?: string;
}
