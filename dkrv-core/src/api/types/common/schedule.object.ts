import { Field, ObjectType, Float } from 'type-graphql';

@ObjectType()
export class Schedule {
  @Field(type => String)
  day: string;

  @Field(type => String, { nullable: true })
  startAm?: string;

  @Field(type => String, { nullable: true })
  endAm?: string;

  @Field(type => String, { nullable: true })
  startPm?: string;

  @Field(type => String, { nullable: true })
  endPm?: string;
}
