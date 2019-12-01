// @flow
import type { Node } from 'react'
import React, { createContext, useEffect, useContext, useReducer } from 'react'
import _ from 'lodash'
import type { ActionT, StateT, ClientT } from './types'

const AmplifyContext = createContext<null>(null)

export const getNames = (constObj: {}): Array<string> => Object.keys(constObj)

// $FlowFixMe
export const AmplifyProvider = ({ client, children }): ClientT => {
  return <AmplifyContext.Provider value={client}>{children}</AmplifyContext.Provider>
}

export const useMutation = (input: { id: string }) => {
  // $FlowFixMe
  const [state, dispatch] = useReducer<StateT, ActionT>(reducer, initialState)

  // $FlowFixMe
  const { API, graphqlOperation } = useContext(AmplifyContext)
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

// create initial state
const initialState = {
  data: [],
  error: '',
  loading: false,
  status: 'PENDING',
  nextToken: ''
}

// create reducer to update state
const reducer = (state: StateT, action: ActionT) => {
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
