import gql from "graphql-tag";

export const RETRIEVE_PRODUCTS_LIST = gql`
  query getPlaceDetail($id: String!) {
    getPlace(id: $id) {
      name
      products {
        id
        name
        collection
        recipes
      }
    }
  }
`;
