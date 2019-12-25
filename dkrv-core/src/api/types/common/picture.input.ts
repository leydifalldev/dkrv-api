import { Field, InputType } from 'type-graphql';

@InputType()
export class PictureInput {
  @Field(type => String)
  small: string;

  @Field(type => String)
  medium: string;

  @Field(type => String)
  big: string;
}
