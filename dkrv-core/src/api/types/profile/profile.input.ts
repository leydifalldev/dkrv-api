import { Field, InputType } from 'type-graphql';
import { RankingInput, ContactInput, AddressInput, MediaInput } from '../index';

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

  @Field(type => String, { nullable: true })
  gender?: string;

  @Field(type => String, { nullable: true })
  birthdate?: string;

  @Field(type => ContactInput, { nullable: true })
  contact?: ContactInput;

  @Field(type => AddressInput, { nullable: true })
  address?: AddressInput;

  @Field(type => [String], { nullable: true })
  tags?: string[];

  @Field(type => [String], { nullable: true })
  roles?: string[];

  @Field(type => String, { nullable: true })
  password?: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => RankingInput, { nullable: true })
  ranking?: RankingInput;

  @Field(type => MediaInput, { nullable: true })
  pictures?: MediaInput;

  @Field(type => String, { nullable: true })
  facebook?: string;

  @Field(type => String, { nullable: true })
  twitter?: string;
}
