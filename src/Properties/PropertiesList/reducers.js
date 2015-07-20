import { FILTER_CHANGED, PAGE_CHANGED, FETCH_PROPERTIES } from './types'
import createListReducers from '../../List/createListReducers'

export default createListReducers({
  storeNames: {
    filters: 'propertiesListFilters',
    pagination: 'propertiesListPagination',
    data: 'propertiesList',
  },
  actionTypes: {
    request: FETCH_PROPERTIES,
    filter: FILTER_CHANGED,
  },
})
