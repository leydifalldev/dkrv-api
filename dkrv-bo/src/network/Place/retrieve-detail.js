import gql from "graphql-tag";

export const RETRIEVE_PLACE_DETAIL = gql`
  query getPlaceDetail($id: String!) {
    getPlace(id: $id) {
      id
      name
      logo
      phone
      email
      description
      location {
        address
        cpc
        zone
        coordinate {
          lng
          lat
        }
      }
      gastronomies
      likes
      notation
      travelTime
      oceanNear
      temporalyPlace
      products {
        id
        name
      }
    }
  }
`;
