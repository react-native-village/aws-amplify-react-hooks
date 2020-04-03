/* @flow */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateMessageInput = {|
  id?: ?string,
  title: string,
  color?: ?string,
  image?: ?string,
  createdAt?: ?string,
  owner?: ?string,
|};

export type ModelMessageConditionInput = {|
  title?: ?ModelStringInput,
  color?: ?ModelStringInput,
  image?: ?ModelStringInput,
  createdAt?: ?ModelStringInput,
  and?: ?Array< ?ModelMessageConditionInput >,
  or?: ?Array< ?ModelMessageConditionInput >,
  not?: ?ModelMessageConditionInput,
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

export type UpdateMessageInput = {|
  id: string,
  title?: ?string,
  color?: ?string,
  image?: ?string,
  createdAt?: ?string,
  owner?: ?string,
|};

export type DeleteMessageInput = {|
  id?: ?string,
|};

export type ModelMessageFilterInput = {|
  id?: ?ModelIDInput,
  title?: ?ModelStringInput,
  color?: ?ModelStringInput,
  image?: ?ModelStringInput,
  createdAt?: ?ModelStringInput,
  owner?: ?ModelStringInput,
  and?: ?Array< ?ModelMessageFilterInput >,
  or?: ?Array< ?ModelMessageFilterInput >,
  not?: ?ModelMessageFilterInput,
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

export type CreateMessageMutationVariables = {|
  input: CreateMessageInput,
  condition?: ?ModelMessageConditionInput,
|};

export type CreateMessageMutation = {|
  createMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};

export type UpdateMessageMutationVariables = {|
  input: UpdateMessageInput,
  condition?: ?ModelMessageConditionInput,
|};

export type UpdateMessageMutation = {|
  updateMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};

export type DeleteMessageMutationVariables = {|
  input: DeleteMessageInput,
  condition?: ?ModelMessageConditionInput,
|};

export type DeleteMessageMutation = {|
  deleteMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};

export type GetMessageQueryVariables = {|
  id: string,
|};

export type GetMessageQuery = {|
  getMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};

export type ListMessagesQueryVariables = {|
  filter?: ?ModelMessageFilterInput,
  limit?: ?number,
  nextToken?: ?string,
|};

export type ListMessagesQuery = {|
  listMessages: ? {|
    __typename: "ModelMessageConnection",
    items: ? Array<? {|
      __typename: string,
      id: string,
      title: string,
      color: ?string,
      image: ?string,
      createdAt: ?string,
      owner: ?string,
    |} >,
    nextToken: ?string,
  |},
|};

export type OnCreateMessageSubscriptionVariables = {|
  owner: string,
|};

export type OnCreateMessageSubscription = {|
  onCreateMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};

export type OnUpdateMessageSubscriptionVariables = {|
  owner: string,
|};

export type OnUpdateMessageSubscription = {|
  onUpdateMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};

export type OnDeleteMessageSubscriptionVariables = {|
  owner: string,
|};

export type OnDeleteMessageSubscription = {|
  onDeleteMessage: ? {|
    __typename: "Message",
    id: string,
    title: string,
    color: ?string,
    image: ?string,
    createdAt: ?string,
    owner: ?string,
  |},
|};