import { Field, ObjectType } from 'type-graphql';
import { Coordinate } from './coordinate.type';

@ObjectType()
export class Location {
  @Field(type => String)
  address: string;

  @Field(type => String, { nullable: true })
  cpc: string;

  @Field(type => String)
  zone: string;

  @Field(type => Coordinate, { nullable: true })
  coordinate: string;
}
