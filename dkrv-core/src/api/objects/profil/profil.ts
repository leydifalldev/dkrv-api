import { Field, Int, ObjectType } from 'type-graphql';
import { Location } from '../location.object';
import { Country } from '../country.object';
import { Picture } from '../picture';

@ObjectType()
export class Profil {
  @Field(type => String)
  id: string;

  @Field(type => String, { nullable: true })
  fullname: string;

  @Field(type => String, { nullable: true })
  firstname?: string;

  @Field(type => String, { nullable: true })
  lastname?: string;

  @Field(type => String)
  email: string;

  @Field(type => String)
  gender: string;

  @Field(type => String, { nullable: true })
  birthdate?: string;

  @Field(type => String, { nullable: true })
  address?: string;

  @Field(type => Country, { nullable: true })
  zone?: Country[];

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => Location, { nullable: true })
  location?: Location;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => [String], { nullable: true })
  roles?: string[];

  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => String, { nullable: true })
  description?: String;

  @Field(type => [Picture], { nullable: true })
  pictures?: Picture;
}
