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

export type ModelJobConditionInput = {|
  position?: ?ModelStringInput,
  rate?: ?ModelIntInput,
  description?: ?ModelStringInput,
  and?: ?Array< ?ModelJobConditionInput >,
  or?: ?Array< ?ModelJobConditionInput >,
  not?: ?ModelJobConditionInput,
|};

export type ModelStringInput = {|
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
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type ModelAttributeTypes =
  "binary" |
  "binarySet" |
  "bool" |
  "list" |
  "map" |
  "number" |
  "numberSet" |
  "string" |
  "stringSet" |
  "_null";


export type ModelSizeInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
|};

export type ModelIntInput = {|
  ne?: ?number,
  eq?: ?number,
  le?: ?number,
  lt?: ?number,
  ge?: ?number,
  gt?: ?number,
  between?: ?Array< ?number >,
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
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

export type ModelJobFilterInput = {|
  id?: ?ModelIDInput,
  position?: ?ModelStringInput,
  rate?: ?ModelIntInput,
  description?: ?ModelStringInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelJobFilterInput >,
  or?: ?Array< ?ModelJobFilterInput >,
  not?: ?ModelJobFilterInput,
|};

export type ModelIDInput = {|
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
  attributeExists?: ?boolean,
  attributeType?: ?ModelAttributeTypes,
  size?: ?ModelSizeInput,
|};

export type CreateJobMutationVariables = {|
  input: CreateJobInput,
  condition?: ?ModelJobConditionInput,
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
  condition?: ?ModelJobConditionInput,
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
  condition?: ?ModelJobConditionInput,
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