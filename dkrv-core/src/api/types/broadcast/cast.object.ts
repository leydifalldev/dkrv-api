import { Field, ObjectType } from 'type-graphql';
import { LocationInput, PictureInput, Product, Event, BroadcastResult } from '../index';

@ObjectType()
export class Cast {
  @Field(type => String, { nullable: true })
  name: string;

  @Field(type => [BroadcastResult], { nullable: true })
  data?: any;
}
