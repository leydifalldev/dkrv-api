import { Field, ObjectType, Int } from 'type-graphql';
import { Product } from './product.object';
import { ServiceResponse } from "../../../types/common.defs";

@ObjectType()
export class ProductListResponse {
  @Field(type => Int, { nullable: true })
  status?: number;

  @Field(type => Int, { nullable: true })
  total?: number;

  @Field(type => [Product])
  payload: Product[];

  @Field(type => String, { nullable: true })
  error?: string;
}
