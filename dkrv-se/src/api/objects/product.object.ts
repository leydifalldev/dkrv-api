import { Field, Int, ObjectType, InputType, Float } from 'type-graphql';
import { Recipe } from './recipe.type';
import { Coordinate } from './coordinate.type';
import { Picture } from './picture';

@ObjectType()
export class Product {
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

  @Field(type => [Recipe], { nullable: true })
  recipes?: Recipe[];

  @Field(type => Int, { nullable: true })
  spicy?: number;

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

  @Field(type => Coordinate, { nullable: true })
  location?: Coordinate;

  @Field(type => Picture, { nullable: true })
  picture?: Picture;

  @Field(type => Boolean, { nullable: true })
  menuAvailable?: boolean;
}
