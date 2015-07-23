import { storeNames, actionTypeNames } from './createNamespaces'

var exConfig = {
  actionTypeNamespace: 'PROPERTIES_LIST',
}


const INITIAL_FILTERS_STATE = {
  page: 1,
}

const INITIAL_PAGINATION_STATE = {
  currentPage: 1,
  totalPages: 1,
  hasNext: false,
  hasPrev: false,
}

const INITIAL_DATA_STATE = {
  loading: false,
  items: [],
  error: null
}


export default function createListReducers(config) {

  const { actionTypeNamespace } = config

  const {
    request: ACTION_TYPE_REQUEST_LIST,
    filter: ACTION_TYPE_CHANGE_FILTER,
  } = actionTypeNames(actionTypeNamespace)



  function filtersReducer(state = INITIAL_FILTERS_STATE, action) {
    switch (action.type) {
      case ACTION_TYPE_CHANGE_FILTER:
        return {...state, ...action.payload}
      default:
        return state
    }
  }

  function paginationReducer(state = INITIAL_PAGINATION_STATE, action) {
    const [ PENDING, SUCCESS, ERROR ] = ACTION_TYPE_REQUEST_LIST
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

  function listReducer(state = INITIAL_DATA_STATE, action) {
    const [ PENDING, SUCCESS, ERROR ] = ACTION_TYPE_REQUEST_LIST
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

  return function(state = {}, action) {
    return {
      list: listReducer(state.list, action),
      pagination: paginationReducer(state.pagination, action),
      filters: filtersReducer(state.filters, action),
    }
  }

}
