import createListApp from '../../List/createListApp'
import api from '../../api'

export default createListApp({
  storeNamespace: 'inspectionsList',
  actionTypeNamespace: 'INSPECTIONS_LIST',
  fetch({ query }) {
    return api('inspections', { query })
  }
})
