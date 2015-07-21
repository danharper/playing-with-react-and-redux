import { connect } from 'react-redux'
import { storeNames } from './createNamespaces'

export const stateSelector = storeNamespace => state => {
  const names = storeNames(storeNamespace)
  return {
    list: state[names.data],
    filters: state[names.filters],
    pagination: state[names.pagination],
  }
}

export const connectList = storeNamespace => component => connect(stateSelector(storeNamespace))(component)
