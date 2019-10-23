import gql from "graphql-tag";

export const CREATE_PLACE_DETAIL = gql`
  mutation CreatePlace($placeInput: PlaceInput!) {
    createPlace(place: $placeInput)
  }
`;
