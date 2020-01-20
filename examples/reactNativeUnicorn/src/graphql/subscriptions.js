// @flow
// this is an auto generated file. This will be overwritten

export const onCreateJob = `subscription OnCreateJob($owner: String!) {
  onCreateJob(owner: $owner) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const onUpdateJob = `subscription OnUpdateJob($owner: String!) {
  onUpdateJob(owner: $owner) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const onDeleteJob = `subscription OnDeleteJob($owner: String!) {
  onDeleteJob(owner: $owner) {
    id
    position
    rate
    description
    owner
  }
}
`;
export const onCreateUser = `subscription OnCreateUser($owner: String!) {
  onCreateUser(owner: $owner) {
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
export const onUpdateUser = `subscription OnUpdateUser($owner: String!) {
  onUpdateUser(owner: $owner) {
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
export const onDeleteUser = `subscription OnDeleteUser($owner: String!) {
  onDeleteUser(owner: $owner) {
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
