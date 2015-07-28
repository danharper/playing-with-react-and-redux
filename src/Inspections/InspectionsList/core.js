import { text, select, clientSelect } from '../../Filters/FilterInputs'
import { createListApp } from '../../List'
import { getInspections } from '../api'

const FILTERS = [
  text('address', 'Address'),
  clientSelect('client_id', 'Client :D'),
]

export default createListApp({
  storeName: 'inspectionsList',
  actionTypeNamespace: 'INSPECTIONS_LIST',
  filters: FILTERS,
  fetch: getInspections
})
