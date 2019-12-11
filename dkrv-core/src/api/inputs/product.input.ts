import { Field, Int, InputType, Float } from 'type-graphql';
import { RecipeInput } from './recipe.input';
import { LocationInput } from './location.input';
import { PictureInput } from './picture.input';

@InputType()
export class ProductInput {
  @Field(type => String, { nullable: true })
  id: string;

  @Field(type => String)
  name: string;

  @Field(type => [String])
  categories?: string[];

  @Field(type => String)
  collection?: string;

  @Field(type => [String], { nullable: true })
  gastronomies: string[];

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [String], { nullable: true })
  recipes?: string[];

  @Field(type => Int, { nullable: true })
  spicy?: number;

  @Field(type => Float)
  price: number;

  @Field(type => Float)
  discount?: number;

  @Field(type => Int, { nullable: true })
  quantity?: number;

  @Field(type => String, { nullable: true })
  size?: string;

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => String)
  placeid: string;

  @Field(type => String, { nullable: true })
  placename?: string;

  @Field(type => String, { nullable: true })
  placelogo?: string;

  @Field(type => String, { nullable: true })
  placezone?: string;

  @Field(type => LocationInput, { nullable: true })
  location?: LocationInput;

  @Field(type => [String], { nullable: true })
  picture?: string[];

  @Field(type => Boolean, { nullable: true })
  menuAvailable?: boolean;
}
