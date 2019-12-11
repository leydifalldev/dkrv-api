import gql from "graphql-tag";

export const ADD_PRODUCT = gql`
  mutation CreateProduct($productInput: ProductInput!) {
    createProduct(product: $productInput)
  }
`;
