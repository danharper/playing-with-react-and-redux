import { FILTER_CHANGED, FETCH_PROPERTIES } from './types'

const initialState = {
  loading: false,
  data: [],
  error: null
}

export function propertiesList(state = initialState, action) {
  const [ PENDING, SUCCESS, ERROR ] = FETCH_PROPERTIES
  switch (action.type) {
    case PENDING:
      return {...state, loading: true}
    case SUCCESS:
      return {...state, loading: false, data: action.payload}
    case ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

export function propertiesListFilters(state = {}, action) {
  switch (action.type) {
    case FILTER_CHANGED:
      return {...state, ...action.payload}
    default:
      return state
  }
}
