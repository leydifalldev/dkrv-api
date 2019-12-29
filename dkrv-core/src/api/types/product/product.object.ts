import { Field, Int, Float, ObjectType } from 'type-graphql';
import { Location, Contact, Address, Ranking, Media } from '../index';
import { User } from '../user/user.object';

@ObjectType()
export class Product {
  @Field(type => String, { nullable: true })
  id?: string;

  @Field(type => String)
  name: string;

  @Field(type => [String])
  categories: string[];

  @Field(type => String)
  collection: string;

  @Field(type => [String], { nullable: true })
  gastronomies?: string[];

  @Field(type => [String], { nullable: true })
  recipes?: string[];

  @Field(type => String, { nullable: true })
  spicy?: string;

  @Field(type => [String], { nullable: true })
  tags?: string[];

  @Field(type => Float)
  price: number;

  @Field(type => Float, { nullable: true })
  discount?: number;

  @Field(type => Int, { nullable: true })
  quantity?: number;

  @Field(type => String, { nullable: true })
  size?: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => Contact)
  contact: Contact;

  @Field(type => Address)
  address: Address;

  @Field(type => Ranking, { nullable: true })
  ranking?: Ranking;

  @Field(type => String)
  placeid: string;

  @Field(type => Location, { nullable: true })
  location?: Location;

  @Field(type => Media, { nullable: true })
  pictures?: Media;

  @Field(type => Boolean, { nullable: true })
  // tslint:disable-next-line:variable-name
  hasmenu?: boolean;

  @Field(type => User, { nullable: true })
  account?: User;

  @Field(type => String, { nullable: true })
  CREATED_AT?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_DATE?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_USER?: string;
}
