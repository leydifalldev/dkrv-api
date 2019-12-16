import { Field, InputType, Int } from 'type-graphql';
import { NameValueInput } from './namevalue.input';

@InputType()
export class SearchParamsInput {
  @Field(type => [NameValueInput], { nullable: true })
  filters?: NameValueInput[];

  @Field(type => [NameValueInput], { nullable: true })
  match?: NameValueInput[];

  @Field(type => [NameValueInput], { nullable: true })
  should?: NameValueInput[];

  @Field(type => [NameValueInput], { nullable: true })
  must?: NameValueInput[];

  @Field(type => Int, { nullable: true })
  from?: number;

  @Field(type => Int, { nullable: true })
  size?: number;

  @Field(type => String, { nullable: true })
  q?: string;
}
