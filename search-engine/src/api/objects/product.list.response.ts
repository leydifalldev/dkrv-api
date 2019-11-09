import { Field, ObjectType, Int } from 'type-graphql';
import { Product } from './product.object';

@ObjectType()
export class ProductListResponse {
  @Field(type => Int, { nullable: true })
  status: number;

  @Field(type => [Product])
  products: Product[];
}
