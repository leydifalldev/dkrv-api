import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Picture {
  @Field(type => String)
  src?: string;
}
