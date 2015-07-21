import createListActions from './createListActions'
import createListReducers from './createListReducers'

export default function createListApp(config) {
  return {
    actions: createListActions(config),
    reducers: createListReducers(config),
    storeNamespace: config.storeNamespace,
  }
}
