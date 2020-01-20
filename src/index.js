import React, { createContext, useEffect, useContext, useReducer } from 'react'
import _ from 'lodash'
import type { ActionT, StateT } from './types'

const AmplifyContext = createContext(null)

export const getNames = constObj => Object.keys(constObj)

export const AmplifyProvider = ({ client, children }) => {
  return <AmplifyContext.Provider value={client}>{children}</AmplifyContext.Provider>
}

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
  //console.log('state', state)

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

  // $FlowFixMe
  const { Auth, API, graphqlOperation } = useContext(AmplifyContext)

  useEffect(() => {
    read()
    let isSubscribed = true // eslint-disable-line
    const owner = Auth.user.attributes.sub
    const [createStr, updateStr, deleteStr] = [queryData[1], queryData[2], queryData[3]]
    const error = ({ errors }) => dispatch({ type: 'ERROR', error: errors[0].message })
    const subCreate = API.graphql(graphqlOperation(query[createStr], { owner })).subscribe({
      next: e => {
        const obj = e.value.data[createStr]
        dispatch({ type: 'SUBSCRIPTION', obj })
      },
      error
    })
    const subUpdate = API.graphql(graphqlOperation(query[updateStr], { owner })).subscribe({
      next: e => dispatch({ type: 'SUBSCRIPTION', obj: e.value.data[updateStr] }),
      error
    })
    const subDelete = API.graphql(graphqlOperation(query[deleteStr], { owner })).subscribe({
      next: e => dispatch({ type: 'DELETE', obj: e.value.data[deleteStr] }),
      error
    })
    return () => {
      subCreate.unsubscribe()
      subUpdate.unsubscribe()
      subDelete.unsubscribe()
      isSubscribed = false
    }
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

  const { data, loading, error, status } = state
  return { data, loading, error, status, fetchMore }
}

export const useMutation = (input: { id: string }) => {
  // $FlowFixMe
  const [state, dispatch] = useReducer<StateT, ActionT>(reducer, initialState)

  // $FlowFixMe
  const { API, graphqlOperation } = useContext(AmplifyContext)
  const setCreate = async (mutate: string) => {
    dispatch({ type: 'LOADING' })
    try {
      const data = await API.graphql(graphqlOperation(mutate, { input }))
      return data
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const setUpdate = async (mutate: string) => {
    dispatch({ type: 'LOADING' })
    try {
      const obj = await API.graphql(graphqlOperation(mutate, { input }))
      return obj
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const setDelete = async (mutate: string) => {
    dispatch({ type: 'LOADING' })
    try {
      const { id } = input
      const obj = await API.graphql(graphqlOperation(mutate, { input: { id } }))
      return obj
    } catch (err) {
      dispatch({ type: 'ERROR', error: err.errors[0].message })
    }
  }

  const { loading, error, status } = state
  return [setCreate, setUpdate, setDelete, { loading, error, status }]
}

// create reducer to update state
export const reducer = (state: StateT, action: ActionT) => {
  switch (action.type) {
    case 'SUBSCRIPTION':
      // $FlowFixMe
      delete action.obj.__typename //eslint-disable-line
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
