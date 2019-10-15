import gql from 'graphql-tag';

export const RETRIEVE_PLACE_DETAIL = gql`
  query getPlaceDetail($id: String!){
    getPlace(id: $id){
      status
      place {
        id
        name
        logo
        phone
        email
        description
        gastronomie
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
}
`;