// @flow
// this is an auto generated file. This will be overwritten

export const createJob = `mutation CreateJob(
  $input: CreateJobInput!
  $condition: ModelJobConditionInput
) {
  createJob(input: $input, condition: $condition) {
    id
    position
    rate
    description
    owner
  }
}
`
export const updateJob = `mutation UpdateJob(
  $input: UpdateJobInput!
  $condition: ModelJobConditionInput
) {
  updateJob(input: $input, condition: $condition) {
    id
    position
    rate
    description
    owner
  }
}
`
export const deleteJob = `mutation DeleteJob(
  $input: DeleteJobInput!
  $condition: ModelJobConditionInput
) {
  deleteJob(input: $input, condition: $condition) {
    id
    position
    rate
    description
    owner
  }
}
`
