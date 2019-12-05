import { Field, Int, ObjectType } from 'type-graphql';
import { Location } from './location.object';
import { Product } from './product.object';
import { Picture } from './picture';
import { Country } from './country.object';

@ObjectType()
export class Place {
  @Field(type => String)
  id: string;

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

  @Field(type => Country, { nullable: true })
  gastronomies?: Country[];

  @Field(type => Int, { nullable: true })
  notation?: number;

  @Field(type => Boolean, { nullable: true })
  oceanear?: boolean;

  @Field(type => String)
  address: string;

  @Field(type => String)
  zone: string;

  @Field(type => Location, { nullable: true })
  location?: Location;

  @Field(type => Int, { nullable: true })
  likes?: number;

  @Field(type => Boolean, { nullable: true })
  temporaly?: boolean;

  @Field(type => String, { nullable: true })
  logo?: string;

  @Field(type => [Picture], { nullable: true })
  pictures?: Picture;

  @Field(type => [Product], { nullable: true })
  products?: Product[];
}
