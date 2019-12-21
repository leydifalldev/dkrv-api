import { Field, InputType } from 'type-graphql';

@InputType()
export class ScheduleInput {
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
