import { Field, InputType, Int } from 'type-graphql';
import { PictureInput } from '../index';

@InputType()
export class MediaInput {
  @Field(type => Int)
  main: number;

  @Field(type => String)
  logo: string;

  @Field(type => [PictureInput])
  gallery: PictureInput[];
}
