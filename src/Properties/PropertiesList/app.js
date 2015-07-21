import createListApp from '../../List/createListApp'
import api from '../../api'

export default createListApp({
  storeNamespace: 'propertiesList',
  actionTypeNamespace: 'PROPERTIES_LIST',
  fetch({ query }) {
    return api('properties', { query })
  }
})
