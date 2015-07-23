import { combineReducers } from 'redux'
import actionTypes from './actionTypes'

const INITIAL_LIST_STATE = { loading: false, items: [], error: null }
const INITIAL_PAGINATION_STATE = { currentPage: 1, totalPages: 1, hasNext: false, hasPrev: false }
const INITIAL_FILTERS_STATE = { page: 1 }

const [ PENDING, SUCCESS, ERROR ] = [ 0, 1, 2 ]

export default function createListReducers(actionTypeNamespace) {
  const { REQUEST_LIST_ACTION, CHANGE_FILTER_ACTION } = actionTypes(actionTypeNamespace)

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

  const filtersReducer = createStore(INITIAL_FILTERS_STATE, new Map([
    [CHANGE_FILTER_ACTION, (state, action) => ({
      ...state, ...action.payload
    })]
  ]))

  return combineReducers({
    list: listReducer,
    pagination: paginationReducer,
    filters: filtersReducer,
  })

  // function listReducer(state = INITIAL_LIST_STATE, action) {
  //   const [ PENDING, SUCCESS, ERROR ] = REQUEST_LIST_ACTION
  //   switch (action.type) {
  //     case PENDING:
  //       return {...state, loading: true}
  //     case SUCCESS:
  //       return {...state, loading: false, items: action.payload.data}
  //     case ERROR:
  //       return {...state, loading: false, error: action.payload}
  //     default:
  //       return state
  //   }
  // }

  // function paginationReducer(state = INITIAL_PAGINATION_STATE, action) {
  //   const [ PENDING, SUCCESS, ERROR ] = REQUEST_LIST_ACTION
  //   switch (action.type) {
  //     case SUCCESS:
  //
  //     default:
  //       return state
  //   }
  // }

  // function filtersReducer(state = INITIAL_FILTERS_STATE, action) {
  //   switch (action.type) {
  //     case CHANGE_FILTER_ACTION:
  //       return {...state, ...action.payload}
  //     default:
  //       return state
  //   }
  // }

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
