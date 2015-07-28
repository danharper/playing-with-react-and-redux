import { combineReducers } from 'redux'
import actionTypes from './actionTypes'
import { asyncLevels } from '../support'

const INITIAL_LIST_STATE = { loading: false, items: [], error: null }
const INITIAL_PAGINATION_STATE = { currentPage: 1, totalPages: 1, hasNext: false, hasPrev: false }
const INITIAL_FILTERS_STATE = { page: { value: 1, active: true } }

const [ PENDING, SUCCESS, ERROR ] = asyncLevels

export default function createListReducers(actionTypeNamespace) {
  const {
    REQUEST_LIST_ACTION,
    CHANGE_FILTER_ACTION, DISABLE_FILTER_ACTION, ENABLE_FILTER_ACTION
  } = actionTypes(actionTypeNamespace)


  const listReducer = createStore(INITIAL_LIST_STATE, new Map([
    [REQUEST_LIST_ACTION[PENDING], state => ({
      ...state, loading: true,
    })],
    [REQUEST_LIST_ACTION[SUCCESS], (state, action) => ({
      ...state, loading: false, items: action.payload.data
    })],
    [REQUEST_LIST_ACTION[ERROR], (state, action) => ({
      ...state, loading: false, error: action.payload
    })]
  ]))


  const paginationReducer = createStore(INITIAL_PAGINATION_STATE, new Map([
    [REQUEST_LIST_ACTION[SUCCESS], (state, action) => {
      const { currentPage, totalPages } = action.payload.pagination
      return {
        currentPage,
        totalPages,
        hasNext: totalPages > currentPage,
        hasPrev: currentPage > 1,
      }
    }]
  ]))


  const filtersReducer = createStore(INITIAL_FILTERS_STATE, new Map([
    [CHANGE_FILTER_ACTION, (state, {payload}) => ({
      ...state, [payload.field]: {
        ...state[payload.field],
        value: payload.value
      }
    })],
    [DISABLE_FILTER_ACTION, (state, {payload}) => ({
      ...state, [payload]: {
        ...state[payload],
        active: false,
      }
    })],
    [ENABLE_FILTER_ACTION, (state, {payload}) => ({
      ...state, [payload]: {
        ...state[payload],
        active: true,
      }
    })],
  ]))

  return combineReducers({
    list: listReducer,
    pagination: paginationReducer,
    filters: filtersReducer,
  })

}

function createStore(initialState, handlers) {
  return (state = initialState, action) => {
    if (handlers.has(action.type)) {
      return handlers.get(action.type)(state, action);
    }
    else {
      return state;
    }
  }
}
