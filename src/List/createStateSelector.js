import { storeNames } from './createNamespaces'

export const stateSelector = storeNamespace => state => {
  const names = storeNames(storeNamespace)
  return {
    list: state[names.list],
    filters: state[names.filters],
    pagination: state[names.pagination],
  }
}
