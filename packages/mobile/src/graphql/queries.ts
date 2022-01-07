import {gql} from '@apollo/client';

const Tests_QUERY = gql`
  query Me {
    me {
      email
    }
  }
`;
const GET_PROFILES = gql`
  query profiles {
    profiles(sort: "created_at:DESC") {
      name
      lat
      lng
      group
    }
  }
`;
const GET_REQUESTS = gql`
  query requests($sort: String) {
    requests(sort: $sort) {
      name
      lat
      lng
      group
      description
      phone
    }
  }
`;

const createProfile = gql`
  mutation CreateProfile(
    $name: String!
    $dob: Date!
    $group: ENUM_PROFILE_GROUP!
    $period: ENUM_PROFILE_PERIOD!
    $lat: Float!
    $lng: Float!
  ) {
    createProfile(
      input: {
        data: {
          name: $name
          dob: $dob
          group: $group
          period: $period
          lat: $lat
          lng: $lng
        }
      }
    ) {
      profile {
        id
        name
      }
    }
  }
`;
const createRequest = gql`
  mutation CreateRequest(
    $name: String!
    $group: ENUM_REQUEST_GROUP!
    $lat: Float!
    $lng: Float!
    $description: String!
    $phone: Int!
  ) {
    createRequest(
      input: {
        data: {
          name: $name
          description: $description
          group: $group
          lat: $lat
          lng: $lng
          phone: $phone
        }
      }
    ) {
      request {
        id
        name
      }
    }
  }
`;
