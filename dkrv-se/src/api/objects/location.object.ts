import { Field, ObjectType } from 'type-graphql';
import { Coordinate } from './coordinate.type';

@ObjectType()
export class Location {
  @Field(type => Coordinate, { nullable: true })
  coordinate: string;
}
