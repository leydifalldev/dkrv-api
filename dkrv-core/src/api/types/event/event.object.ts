import { Field, Int, ObjectType } from 'type-graphql';
import { Price, Profile, Place, Location, Picture } from '../index';

@ObjectType()
export class Event {
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

  @Field(type => [Price], { nullable: true })
  // tslint:disable-next-line:variable-name
  prices?: Price[];

  @Field(type => Profile, { nullable: true })
  // tslint:disable-next-line:variable-name
  manager?: Profile;

  @Field(type => Place, { nullable: true })
  // tslint:disable-next-line:variable-name
  place?: Place;

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

  @Field(type => Location, { nullable: true })
  location?: Location;

  @Field(type => [Profile], { nullable: true })
  hosts?: Profile[];

  @Field(type => [Profile], { nullable: true })
  artists?: Profile[];

  @Field(type => [Picture], { nullable: true })
  pictures?: Picture[];
}
