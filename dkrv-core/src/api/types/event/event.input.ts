import { Field, Int, InputType } from 'type-graphql';
import {
  PriceInput,
  ProfileInput,
  PlaceInput,
  LocationInput,
  PictureInput,
} from '../index';

@InputType()
export class EventInput {
  @Field(type => String, { nullable: true })
  id?: string;

  @Field(type => String, { nullable: true })
  name?: string;

  @Field(type => String)
  // tslint:disable-next-line:variable-name
  start_date?: string;

  @Field(type => String, { nullable: true })
  // tslint:disable-next-line:variable-name
  end_date?: string;

  @Field(type => String)
  // tslint:disable-next-line:variable-name
  placeid: string;

  @Field(type => String, { nullable: true })
  // tslint:disable-next-line:variable-name
  placename?: string;

  @Field(type => String, { nullable: true })
  // tslint:disable-next-line:variable-name
  zone?: string;

  @Field(type => [PriceInput], { nullable: true })
  // tslint:disable-next-line:variable-name
  prices?: PriceInput[];

  @Field(type => ProfileInput, { nullable: true })
  // tslint:disable-next-line:variable-name
  manager?: ProfileInput;

  @Field(type => PlaceInput, { nullable: true })
  // tslint:disable-next-line:variable-name
  place?: PlaceInput;

  @Field(type => [String])
  // tslint:disable-next-line:variable-name
  categories: string[];

  @Field(type => Int, { nullable: true })
  // tslint:disable-next-line:variable-name
  notation?: number;

  @Field(type => Int, { nullable: true })
  // tslint:disable-next-line:variable-name
  likes?: number;

  @Field(type => String, { nullable: true })
  // tslint:disable-next-line:variable-name
  logo?: string;

  @Field(type => LocationInput, { nullable: true })
  location?: LocationInput;

  @Field(type => ProfileInput, { nullable: true })
  hosts?: ProfileInput;

  @Field(type => [PictureInput], { nullable: true })
  pictures?: PictureInput[];
}
