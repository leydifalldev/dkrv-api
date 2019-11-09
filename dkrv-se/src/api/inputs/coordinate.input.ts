import { Field, Float, InputType } from 'type-graphql';

@InputType()
export class CoordinateInput {
  @Field(type => Float, { nullable: true })
  lat: number;

  @Field(type => Float, { nullable: true })
  lng: number;
}
