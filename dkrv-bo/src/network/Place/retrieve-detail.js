import gql from "graphql-tag";

export const RETRIEVE_PLACE_DETAIL = gql`
  query getPlaceDetail($id: String!) {
    getPlace(id: $id) {
      name
      logo
      phone
      email
      description
      address
      zone
      categories
      location {
        lng
        lat
      }
      gastronomies {
        code
        name
      }
      likes
      notation
      oceanear
      temporaly
      products {
        id
        name
      }
    }
  }
`;
