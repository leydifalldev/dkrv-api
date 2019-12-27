import { Field, Int, InputType, Float } from 'type-graphql';
import {
  LocationInput,
  PlaceInput,
  ContactInput,
  AddressInput,
  RankingInput,
  MediaInput,
} from '../index';

@InputType()
export class ProductInput {
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

  @Field(type => ContactInput)
  contact: ContactInput;

  @Field(type => AddressInput)
  address: AddressInput;

  @Field(type => RankingInput, { nullable: true })
  ranking?: RankingInput;

  @Field(type => String)
  placeid: string;

  @Field(type => LocationInput, { nullable: true })
  location?: LocationInput;

  @Field(type => MediaInput, { nullable: true })
  pictures?: MediaInput;

  @Field(type => Boolean, { nullable: true })
  // tslint:disable-next-line:variable-name
  hasmenu?: boolean;

  @Field(type => String, { nullable: true })
  accountid?: string;
}
