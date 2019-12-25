import { Field, Int, InputType } from 'type-graphql';
import { LocationInput, PictureInput } from '../index';

@InputType()
export class ProfileInput {
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

  @Field(type => String)
  email: string;

  @Field(type => String)
  gender: string;

  @Field(type => [String], { nullable: true })
  categories?: string[];

  @Field(type => String, { nullable: true })
  birthdate?: string;

  @Field(type => String, { nullable: true })
  address?: string;

  @Field(type => String, { nullable: true })
  zone?: string[];

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => LocationInput, { nullable: true })
  location?: LocationInput;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => [String], { nullable: true })
  roles?: string[];

  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [PictureInput], { nullable: true })
  pictures?: PictureInput;

  @Field(type => [Int], { nullable: true })
  mainpicture?: number;
}
