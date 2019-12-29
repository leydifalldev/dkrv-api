import gql from "graphql-tag";

export const GET_PROFILE_LIST = gql`
  query {
    profiles {
      id
      firstname
      lastname
      artistname
      contact {
        phone
        email
      }
      pictures {
        gallery {
          small
        }
      }
      roles
    }
  }
`;
