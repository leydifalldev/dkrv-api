import { Field, ObjectType, InputType } from 'type-graphql';

@InputType()
export class PictureInput {
  @Field(type => String)
  src?: string;
}
