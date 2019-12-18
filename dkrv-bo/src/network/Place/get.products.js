import gql from "graphql-tag";

export const RETRIEVE_PRODUCTS_LIST = gql`
  query getPlaceDetail($id: String!, $params: SearchParamsInput) {
    getPlace(id: $id) {
      id
      products(params: $params) {
        id
        name
        price
        collection
        recipes
      }
    }
  }
`;
