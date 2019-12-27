import { Field, ObjectType } from 'type-graphql';
import { Contact, Address, Ranking, Media } from '../index';

@ObjectType()
export class Profile {
  @Field(type => String, { nullable: true })
  id?: string;

  @Field(type => String, { nullable: true })
  fullname: string;

  @Field(type => String, { nullable: true })
  firstname?: string;

  @Field(type => String, { nullable: true })
  lastname?: string;

  @Field(type => String, { nullable: true })
  artistname?: string;

  @Field(type => String, { nullable: true })
  gender?: string;

  @Field(type => String, { nullable: true })
  birthdate?: string;

  @Field(type => Contact, { nullable: true })
  contact?: Contact;

  @Field(type => Address, { nullable: true })
  address?: Address;

  @Field(type => [String], { nullable: true })
  tags?: string[];

  @Field(type => [String], { nullable: true })
  roles?: string[];

  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => Ranking, { nullable: true })
  ranking?: Ranking;

  @Field(type => Media, { nullable: true })
  pictures?: Media;

  @Field(type => String, { nullable: true })
  facebook?: string;

  @Field(type => String, { nullable: true })
  twitter?: string;

  @Field(type => String, { nullable: true })
  CREATED_AT?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_DATE?: string;

  @Field(type => String, { nullable: true })
  LAST_UPDATE_USER?: string;
}
