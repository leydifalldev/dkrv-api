import { Field, Float, Int, ObjectType } from 'type-graphql';

@ObjectType()
export class Ranking {
  @Field(type => Float)
  notation: number;

  @Field(type => Int)
  likes: number;
}
