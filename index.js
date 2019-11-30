// @flow
import { useEffect, useReducer } from 'react'
import { Auth, API, graphqlOperation } from 'aws-amplify'
import _ from 'lodash'
import type { ActionT, StateT } from './types'

export const getNames = (constObj: {}): Array<string> => Object.keys(constObj)

// create initial state
export const initialState = {
  data: [],
  error: '',
  loading: false,
  status: 'PENDING',
  nextToken: ''
}

export const useQuery = (query: {}, options: { variables: {} }, queryData: Array<string>) => {
  // $FlowFixMe
  const [state, dispatch] = useReducer<StateT, ActionT>(reducer, initialState)

  const read = async () => {
    dispatch({ type: 'LOADING' })
    try {
      const queryStr = queryData[0]
      const res = await API.graphql(graphqlOperation(query[queryStr], options))
      const { items, nextToken } = res.data[queryStr]
      dispatch({ type: 'READ', data: items, nextToken })
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.message })
    }
  }

  useEffect(() => {
    const owner = Auth.user.attributes.sub
    const [createStr, updateStr, deleteStr] = [queryData[1], queryData[2], queryData[3]]
    const error = ({ errors }) => dispatch({ type: 'ERROR', error: errors[0].message })
    const subCreate = API.graphql(graphqlOperation(query[createStr], { owner })).subscribe({
      next: e => dispatch({ type: 'SUBSCRIPTION', obj: e.value.data[createStr] }),
      error
    })
    const subUpdate = API.graphql(graphqlOperation(query[updateStr], { owner })).subscribe({
      next: e => {
        return dispatch({ type: 'SUBSCRIPTION', obj: e.value.data[updateStr] })
      },
      error
    })
    const subDelete = API.graphql(graphqlOperation(query[deleteStr], { owner })).subscribe({
      next: e => dispatch({ type: 'DELETE', obj: e.value.data[deleteStr] }),
      error
    })
    return () => subCreate.unsubscribe() && subUpdate.unsubscribe() && subDelete.unsubscribe()
    // FIXME
  }, []) //eslint-disable-line

  const fetchMore = async () => {
    try {
      const { nextToken } = state
      const variables = { ...options.variables, nextToken }
      const queryStr = queryData[0]
      const res = await API.graphql(graphqlOperation(query[queryStr], variables))
      nextToken !== null &&
        dispatch({
          type: 'READ',
          data: res.data[queryStr].items,
          nextToken: res.data[queryStr].nextToken
        })
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.message })
    }
  }

  useEffect(() => {
    read()
    // FIXME
  }, []) //eslint-disable-line

  const { data, loading, error, status } = state
  return { data, loading, error, status, fetchMore }
}

export const useMutation = (input: { id: string }) => {
  // $FlowFixMe
  const [state, dispatch] = useReducer<StateT, ActionT>(reducer, initialState)

  const create = async (mutate: string) => {
    dispatch({ type: 'LOADING' })
    try {
      await API.graphql(graphqlOperation(mutate, { input }))
      return true
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const update = async (mutate: string) => {
    dispatch({ type: 'LOADING' })
    try {
      await API.graphql(graphqlOperation(mutate, { input }))
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const del = async (mutate: string) => {
    dispatch({ type: 'LOADING' })
    try {
      const { id } = input
      await API.graphql(graphqlOperation(mutate, { input: { id } }))
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const { loading, error, status } = state
  return [create, update, del, { loading, error, status }]
}

// create reducer to update state
export const reducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case 'CREATE':
      return { ...state, data: [action.items, ...state.data], loading: false, status: 'COMPLETE' }
    case 'SUBSCRIPTION':
      // flatlist is wrong with fetchMore, so this solution
      return { ...state, data: _.uniqBy([action.obj, ...state.data], 'id'), loading: false, status: 'COMPLETE' }
    case 'READ':
      // flatlist is wrong with fetchMore, so this solution
      return {
        ...state,
        data: _.uniqBy([...action.data, ...state.data], 'id'),
        loading: false,
        nextToken: action.nextToken,
        status: 'COMPLETE'
      }
    case 'DELETE':
      return {
        ...state,
        // $FlowFixMe
        data: [...state.data].filter(({ id }) => id !== action.obj.id),
        status: 'COMPLETE'
      }
    case 'LOADING':
      return { ...state, loading: true, status: 'PROGRESS' }
    case 'ERROR':
      return { error: action.error, loading: false, status: 'FAILED' }
    case 'COMPLETE':
      return { ...state, loading: false, status: 'COMPLETE' }
    default:
      return state
  }
}
