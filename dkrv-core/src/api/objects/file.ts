import { Field, ObjectType, Float } from 'type-graphql';

@ObjectType()
export class File {
  @Field(type => String, { nullable: true })
  filename: string;

  @Field(type => String, { nullable: true })
  mimetype: string;

  @Field(type => String, { nullable: true })
  encoding: string;

  @Field(type => Float, { nullable: true })
  size: number;
}
