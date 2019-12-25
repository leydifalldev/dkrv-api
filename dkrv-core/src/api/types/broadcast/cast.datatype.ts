import { createUnionType } from "type-graphql";
import { Product, Place } from '../index';

export const BroadcastResult = createUnionType({
  name: 'BroadcastResult',  // the name of the GraphQL union
  types: [Product, Place], // array of object types classes
});
