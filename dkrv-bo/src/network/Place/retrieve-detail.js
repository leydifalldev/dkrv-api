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
      location {
        lng
        lat
      }
      gastronomies
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
