// @flow
// this is an auto generated file. This will be overwritten

export const getJob = `query GetJob($id: ID!) {
  getJob(id: $id) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const listJobs = `query ListJobs($filter: ModelJobFilterInput, $limit: Int, $nextToken: String) {
  listJobs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      position
      rate
      description
      owner
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    avatar {
      bucket
      region
      key
    }
    username
    firstName
    lastName
    description
    location
    web
    phone
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      username
      firstName
      lastName
      description
      location
      web
      phone
    }
    nextToken
  }
}
`;
