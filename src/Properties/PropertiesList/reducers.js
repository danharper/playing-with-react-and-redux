import { FILTER_CHANGED, PAGE_CHANGED, FETCH_PROPERTIES } from './types'

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
      return {...state, loading: false, data: action.payload.data}
    case ERROR:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

const initialPaginationState = {
  currentPage: 1,
  hasNext: false,
  hasPrev: false
}

export function propertiesPagination(state = initialPaginationState, action) {
  const [ PENDING, SUCCESS, ERROR ] = FETCH_PROPERTIES
  switch (action.type) {
    case SUCCESS:
      const { currentPage, totalPages } = action.payload.pagination
      return {
        currentPage,
        hasNext: totalPages > currentPage,
        hasPrev: currentPage > 1
      }
    default:
      return state
  }
}

export function propertiesListFilters(state = { page: 1 }, action) {
  switch (action.type) {
    case FILTER_CHANGED:
    case PAGE_CHANGED:
      return {...state, ...action.payload}
    default:
      return state
  }
}
