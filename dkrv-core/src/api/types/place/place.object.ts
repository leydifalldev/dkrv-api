import { Field, ObjectType } from 'type-graphql';
import { Contact, Address, Media, Product, Ranking } from '../index';

@ObjectType()
export class Place {
  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [String])
  categories: string[];

  @Field(type => [String], { nullable: true })
  gastronomies: string[];

  @Field(type => [String], { nullable: true })
  tags?: string[];

  @Field(type => Contact, { nullable: true })
  contact?: Contact;

  @Field(type => Address)
  address: Address;

  @Field(type => Ranking)
  ranking?: Ranking;

  @Field(type => Boolean, { nullable: true })
  temporaly?: boolean;

  @Field(type => Media, { nullable: true })
  pictures?: Media;

  @Field(type => String, { nullable: true })
  facebook?: string;

  @Field(type => String, { nullable: true })
  twitter?: string;

  @Field(type => [Product], { nullable: true })
  products?: Product[];

  @Field(type => String, { nullable: true })
  CREATED_AT?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_DATE?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_USER?: string;
}
