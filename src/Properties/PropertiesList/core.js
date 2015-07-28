import { text, select, clientSelect } from '../../Filters/FilterInputs'
import { createListApp } from '../../List'
import { getProperties } from '../api'

const FILTERS = [
  text('address', 'Address'),
  clientSelect('client_id', 'Client!'),
  select('client', 'Client', new Map([
    [null, null],
    [5, 'Nick'],
    [6, 'Obama 2012'],
    [29, 'Mr Client'],
    [211, 'Steve'],
  ])),
]

export default createListApp({
  storeName: 'propertiesList',
  actionTypeNamespace: 'PROPERTIES_LIST',
  filters: FILTERS,
  fetch: getProperties,
})
