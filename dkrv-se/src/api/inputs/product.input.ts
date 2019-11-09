import { Field, Int, InputType, Float } from 'type-graphql';
import { RecipeInput } from './recipe.input';
import { CoordinateInput } from './coordinate.input';
import { PictureInput } from './picture.input';

@InputType()
export class ProductInput {
  @Field(type => String, { nullable: true })
  id: string;

  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => String, { nullable: true })
  category?: string;

  @Field(type => [String], { nullable: true })
  gastronomies: string[];

  @Field(type => String, { nullable: true })
  description?: string;

  @Field(type => [RecipeInput], { nullable: true })
  recipes?: RecipeInput[];

  @Field(type => Int, { nullable: true })
  spicy?: number[];

  @Field(type => Float, { nullable: true })
  price?: number;

  @Field(type => Float, { nullable: true })
  discount?: number;

  @Field(type => Int, { nullable: true })
  quantity?: number;

  @Field(type => Int, { nullable: true })
  size?: number;

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => String, { nullable: true })
  placeid?: string;

  @Field(type => String, { nullable: true })
  placename?: string;

  @Field(type => String, { nullable: true })
  placelogo?: string;

  @Field(type => String, { nullable: true })
  placezone?: string;

  @Field(type => CoordinateInput, { nullable: true })
  location?: CoordinateInput;

  @Field(type => PictureInput, { nullable: true })
  picture?: PictureInput;

  @Field(type => Boolean, { nullable: true })
  menuAvailable?: boolean;
}
