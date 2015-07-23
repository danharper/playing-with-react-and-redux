import actionTypes from './actionTypes'

const INITIAL_LIST_STATE = { loading: false, items: [], error: null }
const INITIAL_PAGINATION_STATE = { currentPage: 1, totalPages: 1, hasNext: false, hasPrev: false }
const INITIAL_FILTERS_STATE = { page: 1 }

export default function createListReducers(actionTypeNamespace) {
  const { REQUEST_LIST_ACTION, CHANGE_FILTER_ACTION } = actionTypes(actionTypeNamespace)

  return function(state = {}, action) {
    return {
      list: listReducer(state.list, action),
      pagination: paginationReducer(state.pagination, action),
      filters: filtersReducer(state.filters, action),
    }
  }

  //
  // LIST REDUCER
  //

  function listReducer(state = INITIAL_LIST_STATE, action) {
    const [ PENDING, SUCCESS, ERROR ] = REQUEST_LIST_ACTION
    switch (action.type) {
      case PENDING:
        return {...state, loading: true}
      case SUCCESS:
        return {...state, loading: false, items: action.payload.data}
      case ERROR:
        return {...state, loading: false, error: action.payload}
      default:
        return state
    }
  }

  //
  // PAGINATION REDUCER
  //

  function paginationReducer(state = INITIAL_PAGINATION_STATE, action) {
    const [ PENDING, SUCCESS, ERROR ] = REQUEST_LIST_ACTION
    switch (action.type) {
      case SUCCESS:
        const { currentPage, totalPages } = action.payload.pagination
        return {
          currentPage,
          totalPages,
          hasNext: totalPages > currentPage,
          hasPrev: currentPage > 1,
        }
      default:
        return state
    }
  }

  //
  // FILTERS REDUCER
  //

  function filtersReducer(state = INITIAL_FILTERS_STATE, action) {
    switch (action.type) {
      case CHANGE_FILTER_ACTION:
        return {...state, ...action.payload}
      default:
        return state
    }
  }

}
