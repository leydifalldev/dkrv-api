import gql from "graphql-tag";

export const RETRIEVE_PLACE_LIST = gql`
  query {
    places {
      id
      name
      description
    }
  }
`;
