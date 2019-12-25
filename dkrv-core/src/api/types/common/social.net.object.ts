import { Field, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class SocialNet {
  @Field(type => String, { nullable: true })
  name?: string;
  @Field(type => String, { nullable: true })
  link?: string;
}
