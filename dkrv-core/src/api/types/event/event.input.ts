import { Field, InputType } from 'type-graphql';
import {
  PriceInput,
  ProfileInput,
  PictureInput,
  RankingInput,
  ContactInput,
  AddressInput,
  MediaInput,
} from '../index';

@InputType()
export class EventInput {
  @Field(type => String, { nullable: true })
  id?: string;

  @Field(type => String, { nullable: true })
  name?: string;

  @Field(type => String)
  // tslint:disable-next-line:variable-name
  start?: string;

  @Field(type => String, { nullable: true })
  end: string;

  @Field(type => String, { nullable: true })
  description: string;

  @Field(type => [PriceInput], { nullable: true })
  prices?: PriceInput[];

  @Field(type => [String])
  categories: string[];

  @Field(type => ContactInput, { nullable: true })
  contact?: ContactInput;

  @Field(type => [String], { nullable: true })
  tags: string[];

  @Field(type => AddressInput)
  address: AddressInput;

  @Field(type => RankingInput, { nullable: true })
  ranking?: RankingInput;

  @Field(type => [ProfileInput], { nullable: true })
  artists?: ProfileInput[];

  @Field(type => [ProfileInput], { nullable: true })
  hosts?: ProfileInput[];

  @Field(type => [MediaInput], { nullable: true })
  pictures?: MediaInput[];
}
