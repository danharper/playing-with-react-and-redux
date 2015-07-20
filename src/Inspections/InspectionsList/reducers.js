import { FILTER_CHANGED, PAGE_CHANGED, FETCH_INSPECTIONS } from './types'
import createListReducers from '../../List/createListReducers'

export default createListReducers({
  storeNames: {
    filters: 'inspectionsListFilters',
    pagination: 'inspectionsListPagination',
    data: 'inspectionsList',
  },
  actionTypes: {
    request: FETCH_INSPECTIONS,
    filter: FILTER_CHANGED,
  },
})
