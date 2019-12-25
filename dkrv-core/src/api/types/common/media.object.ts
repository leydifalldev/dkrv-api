import { Field, Int, ObjectType } from 'type-graphql';
import { Picture } from '../index';

@ObjectType()
export class Media {
  @Field(type => Int)
  main?: number;

  @Field(type => String)
  logo?: string;

  @Field(type => [Picture])
  gallery?: Picture[];
}
