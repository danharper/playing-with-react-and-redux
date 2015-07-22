import { TEXT, SELECT, CLIENT_SELECT } from '../../Filters/FilterInputs'
import createListApp from '../../List/createListApp'
import api from '../../api'

const FILTERS = [
  { field: 'address', name: 'Address', type: TEXT },
  { field: 'client_id', name: 'Client!', type: CLIENT_SELECT },
]

export default createListApp({
  storeNamespace: 'inspectionsList',
  actionTypeNamespace: 'INSPECTIONS_LIST',
  filters: FILTERS,
  fetch: ({ query }) => api('inspections', { query })
})
