import { TEXT, SELECT, CLIENT_SELECT } from '../../Filters/FilterInputs'
import createListApp from '../../List/createListApp'
import { getInspections } from '../api'

const FILTERS = [
  { field: 'address', name: 'Address', type: TEXT },
  { field: 'client_id', name: 'Client!', type: CLIENT_SELECT },
]

export default createListApp({
  storeName: 'inspectionsList',
  actionTypeNamespace: 'INSPECTIONS_LIST',
  filters: FILTERS,
  fetch: getInspections
})
