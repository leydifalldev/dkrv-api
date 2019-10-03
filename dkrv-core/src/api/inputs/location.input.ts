import { Field, InputType } from 'type-graphql';
import { CoordinateInput } from './coordinate.input';

@InputType()
export class LocationInput {
  @Field(type => String)
  address: string;

  @Field(type => String)
  cpc: string;

  @Field(type => String)
  zone: string;

  @Field(type => CoordinateInput, { nullable: true })
  coordinate: CoordinateInput;
}
