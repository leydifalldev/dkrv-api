import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Country {
  @Field(type => String)
  code: string;

  @Field(type => String)
  name: string;
}
