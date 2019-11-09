import { Field, InputType } from 'type-graphql';
import { CoordinateInput } from './coordinate.input';

@InputType()
export class LocationInput {
  @Field(type => CoordinateInput, { nullable: true })
  coordinate: CoordinateInput;
}
