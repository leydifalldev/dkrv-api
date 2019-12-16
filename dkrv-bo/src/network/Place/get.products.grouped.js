import gql from "graphql-tag";

export const RETRIEVE_PRODUCTS_GROUPED_INFO = gql`
  query getPlaceDetail($id: String!) {
    getPlace(id: $id) {
      id
      products_grouped {
        name
        count
        children {
          name
          count
        }
      }
    }
  }
`;
