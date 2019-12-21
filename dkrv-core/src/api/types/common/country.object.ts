import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Country {
  @Field(type => String)
  code: number;

  @Field(type => String)
  name: number;
}
