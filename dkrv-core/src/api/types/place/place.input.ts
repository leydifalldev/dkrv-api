import { Field, Int, InputType } from 'type-graphql';
import { ProductInput, GastronomyInput, PictureInput, LocationInput } from '../index';

@InputType()
export class PlaceInput {
  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => String, { nullable: true })
  phone: string;

  @Field(type => String, { nullable: true })
  email?: string;

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [String])
  categories: string[];

  @Field(type => [GastronomyInput], { nullable: true })
  gastronomies?: GastronomyInput[];

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => Boolean, { nullable: true })
  oceanear?: boolean;

  @Field(type => String)
  address: string;

  @Field(type => String)
  zone: string;

  @Field(type => LocationInput, { nullable: true })
  location?: LocationInput;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => Boolean, { nullable: true })
  temporaly?: boolean;

  @Field(type => String, { nullable: true })
  logo?: string;

  @Field(type => [PictureInput], { nullable: true })
  pictures?: PictureInput;

  @Field(type => [ProductInput], { nullable: true })
  products?: ProductInput[];
}
