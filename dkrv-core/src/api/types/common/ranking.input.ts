import { Field, InputType, Float, Int } from 'type-graphql';

@InputType()
export class RankingInput {
  @Field(type => Float)
  notation: number;

  @Field(type => Int)
  likes: number;
}
