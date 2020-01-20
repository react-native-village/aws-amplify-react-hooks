/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateJobInput = {|
  id?: ?string,
  position: string,
  rate: number,
  description: string,
  owner?: ?string,
|};

export type UpdateJobInput = {|
  id: string,
  position?: ?string,
  rate?: ?number,
  description?: ?string,
  owner?: ?string,
|};

export type DeleteJobInput = {|
  id?: ?string,
|};

export type CreateUserInput = {|
  id?: ?string,
  avatar?: ?S3ObjectInput,
  username: string,
  firstName: string,
  lastName: string,
  description: string,
  location: string,
  web: string,
  phone: string,
|};

export type S3ObjectInput = {|
  bucket: string,
  region: string,
  key: string,
|};

export type UpdateUserInput = {|
  id: string,
  avatar?: ?S3ObjectInput,
  username?: ?string,
  firstName?: ?string,
  lastName?: ?string,
  description?: ?string,
  location?: ?string,
  web?: ?string,
  phone?: ?string,
|};

export type DeleteUserInput = {|
  id?: ?string,
|};

export type ModelJobFilterInput = {|
  id?: ?ModelIDFilterInput,
  position?: ?ModelStringFilterInput,
  rate?: ?ModelIntFilterInput,
  description?: ?ModelStringFilterInput,
  owner?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelJobFilterInput >,
  or?: ?Array< ?ModelJobFilterInput >,
  not?: ?ModelJobFilterInput,
|};

export type ModelIDFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelStringFilterInput = {|
  ne?: ?string,
  eq?: ?string,
  le?: ?string,
  lt?: ?string,
  ge?: ?string,
  gt?: ?string,
  contains?: ?string,
  notContains?: ?string,
  between?: ?Array< ?string >,
  beginsWith?: ?string,
|};

export type ModelIntFilterInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  contains?: ?number,
  notContains?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelUserFilterInput = {|
  id?: ?ModelIDFilterInput,
  username?: ?ModelStringFilterInput,
  firstName?: ?ModelStringFilterInput,
  lastName?: ?ModelStringFilterInput,
  description?: ?ModelStringFilterInput,
  location?: ?ModelStringFilterInput,
  web?: ?ModelStringFilterInput,
  phone?: ?ModelStringFilterInput,
  and?: ?Array< ?ModelUserFilterInput >,
  or?: ?Array< ?ModelUserFilterInput >,
  not?: ?ModelUserFilterInput,
|};

export type CreateJobMutationVariables = {|
  input: CreateJobInput,
|};

export type CreateJobMutation = {|
  createJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type UpdateJobMutationVariables = {|
  input: UpdateJobInput,
|};

export type UpdateJobMutation = {|
  updateJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type DeleteJobMutationVariables = {|
  input: DeleteJobInput,
|};

export type DeleteJobMutation = {|
  deleteJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type CreateUserMutationVariables = {|
  input: CreateUserInput,
|};

export type CreateUserMutation = {|
  createUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};

export type UpdateUserMutationVariables = {|
  input: UpdateUserInput,
|};

export type UpdateUserMutation = {|
  updateUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};

export type DeleteUserMutationVariables = {|
  input: DeleteUserInput,
|};

export type DeleteUserMutation = {|
  deleteUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};

export type GetJobQueryVariables = {|
  id: string,
|};

export type GetJobQuery = {|
  getJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type ListJobsQueryVariables = {|
  filter?: ?ModelJobFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListJobsQuery = {|
  listJobs: ? {|
    __typename: "ModelJobConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      position: string,
      rate: number,
      description: string,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type GetUserQueryVariables = {|
  id: string,
|};

export type GetUserQuery = {|
  getUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};

export type ListUsersQueryVariables = {|
  filter?: ?ModelUserFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListUsersQuery = {|
  listUsers: ? {|
    __typename: "ModelUserConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      username: string,
      firstName: string,
      lastName: string,
      description: string,
      location: string,
      web: string,
      phone: string,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateJobSubscriptionVariables = {|
  owner: string,
|};

export type OnCreateJobSubscription = {|
  onCreateJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type OnUpdateJobSubscriptionVariables = {|
  owner: string,
|};

export type OnUpdateJobSubscription = {|
  onUpdateJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type OnDeleteJobSubscriptionVariables = {|
  owner: string,
|};

export type OnDeleteJobSubscription = {|
  onDeleteJob: ? {|
    __typename: "Job",
    id: string,
    position: string,
    rate: number,
    description: string,
    owner: ?string,
  |},
|};

export type OnCreateUserSubscriptionVariables = {|
  owner: string,
|};

export type OnCreateUserSubscription = {|
  onCreateUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};

export type OnUpdateUserSubscriptionVariables = {|
  owner: string,
|};

export type OnUpdateUserSubscription = {|
  onUpdateUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};

export type OnDeleteUserSubscriptionVariables = {|
  owner: string,
|};

export type OnDeleteUserSubscription = {|
  onDeleteUser: ? {|
    __typename: "User",
    id: string,
    avatar: ? {|
      __typename: string,
      bucket: string,
      region: string,
      key: string,
    |},
    username: string,
    firstName: string,
    lastName: string,
    description: string,
    location: string,
    web: string,
    phone: string,
  |},
|};