import { Field, Float, InputType } from 'type-graphql';

@InputType()
export class LocationInput {
  @Field(type => Float, { nullable: true })
  lat: number;

  @Field(type => Float, { nullable: true })
  lon: number;
}
