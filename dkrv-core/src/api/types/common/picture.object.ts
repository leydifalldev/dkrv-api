import { Field, ObjectType } from 'type-graphql';

@ObjectType()
export class Picture {
  @Field(type => String, { nullable: true })
  small?: string;

  @Field(type => String, { nullable: true })
  medium?: string;

  @Field(type => String, { nullable: true })
  big?: string;
}
