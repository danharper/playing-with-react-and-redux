import { FETCH_CLIENTS_TYPES } from './types'
import { asyncLevels } from '../../../support'

const [ PENDING, SUCCESS, ERROR ] = asyncLevels

const initialState = {
  loading: false,
  data: [],
  error: null
}

export function clientsSelect(state = initialState, action) {
  switch (action.type) {
    case FETCH_CLIENTS_TYPES[PENDING]:
      return {...state, loading: true, error: null}
    case FETCH_CLIENTS_TYPES[SUCCESS]:
      return {...state, loading: false, data: action.payload, error: null}
    case FETCH_CLIENTS_TYPES[ERROR]:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
