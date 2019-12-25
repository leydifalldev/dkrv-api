import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Picture {
  @Field(type => String)
  small: string;

  @Field(type => String)
  medium: string;

  @Field(type => String)
  big: string;
}
