import _ from 'lodash'

// create initial state
export const initialState = {
  input: {
    position: '',
    rate: '',
    description: ''
  }
}

// create reducer to update state
export const reducer = (state, { type, data, obj, item }) => {
  switch (type) {
    case 'CREATE':
      return { input: obj }
    case 'CLEAR_INPUT':
      return { ...initialState, data: state.data }
    case 'SET_INPUT':
      return { input: item }
    default:
      return state
  }
}
