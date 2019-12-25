import { Field, Int, InputType } from 'type-graphql';
import {
  ContactInput,
  AddressInput,
  MediaInput,
  ProductInput,
  PictureInput,
  RankingInput,
} from '../index';

@InputType()
export class PlaceInput {
  @Field(type => String)
  name: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [String])
  categories: string[];

  @Field(type => [String], { nullable: true })
  gastronomies?: string[];

  @Field(type => [String], { nullable: true })
  tags?: string[];

  @Field(type => ContactInput, { nullable: true })
  contact?: ContactInput;

  @Field(type => AddressInput)
  address: AddressInput;

  @Field(type => RankingInput, { nullable: true })
  ranking?: RankingInput;

  @Field(type => Boolean, { nullable: true })
  temporaly?: boolean;

  @Field(type => [PictureInput], { nullable: true })
  pictures?: MediaInput;

  @Field(type => String, { nullable: true })
  facebook?: string;

  @Field(type => String, { nullable: true })
  twitter?: string;

  @Field(type => [ProductInput], { nullable: true })
  products?: ProductInput[];
}
