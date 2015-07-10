import { TEXT, SELECT, CLIENT_SELECT } from '../../Filters/FilterInputs'

export default [
  { field: 'address', name: 'Address', type: TEXT },
  { field: 'client_id', name: 'Client!', type: CLIENT_SELECT },
  { field: 'client', name: 'Client', type: SELECT, options: new Map([
    [null, null],
    [5, 'Nick'],
    [6, 'Obama 2012'],
    [29, 'Mr Client'],
    [211, 'Steve'],
  ]) }
  // { field: 'ref', name: 'Reference', type: FILTER.TEXT }
]
