import { Field, InputType } from 'type-graphql';

@InputType()
export class PictureInput {
  @Field(type => String, { nullable: true })
  small?: string;

  @Field(type => String, { nullable: true })
  medium?: string;

  @Field(type => String, { nullable: true })
  big?: string;
}
