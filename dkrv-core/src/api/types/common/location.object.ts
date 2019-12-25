import { Field, ObjectType, Float } from 'type-graphql';

@ObjectType()
export class Location {
  @Field(type => Float, { nullable: true })
  lat: number;

  @Field(type => Float, { nullable: true })
  lng: number;
}
