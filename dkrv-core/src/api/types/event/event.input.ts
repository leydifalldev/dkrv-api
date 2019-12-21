import { Field, Int, InputType } from 'type-graphql';
import { DateScalar } from '../index';

@InputType()
export class EventInput {

  @Field(type => String, { nullable: true })
  name?: string;

  @Field(type => Date, { nullable: true })
  start_date?: Date;
}
