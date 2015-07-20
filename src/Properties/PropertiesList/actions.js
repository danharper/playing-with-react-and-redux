import createListActions from '../../List/createListActions'
import api from '../../api'
import { FILTER_CHANGED, PAGE_CHANGED, FETCH_PROPERTIES } from './types'

export default createListActions({
  storeNames: {
    filters: 'propertiesListFilters',
    pagination: 'propertiesListPagination',
    data: 'propertiesList',
  },
  actionTypes: {
    request: FETCH_PROPERTIES,
    filter: FILTER_CHANGED,
  },
  fetch({ query }) {
    return api('properties', { query })
  }
})
