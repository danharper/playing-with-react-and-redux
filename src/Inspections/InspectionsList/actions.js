import createListActions from '../../List/createListActions'
import api from '../../api'
import { FILTER_CHANGED, PAGE_CHANGED, FETCH_INSPECTIONS } from './types'

export default createListActions({
  storeNames: {
    filters: 'inspectionsListFilters',
    pagination: 'inspectionsListPagination',
    data: 'inspectionsList',
  },
  actionTypes: {
    request: FETCH_INSPECTIONS,
    filter: FILTER_CHANGED,
  },
  fetch({ query }) {
    return api('inspections', { query })
  }
})
