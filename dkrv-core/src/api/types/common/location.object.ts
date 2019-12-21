import { Field, ObjectType, Float } from 'type-graphql';
import { Coordinate } from './coordinate.object';

@ObjectType()
export class Location {
  @Field(type => Float, { nullable: true })
  lat: number;

  @Field(type => Float, { nullable: true })
  lng: number;
}
