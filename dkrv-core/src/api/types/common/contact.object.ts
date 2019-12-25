import { Field, ObjectType, Int } from 'type-graphql';

@ObjectType()
export class Contact {
  @Field(type => String)
  phone: string;

  @Field(type => String)
  email: string;
}
