import api from '../api'

export function getProperties({ query }) {
  return api('properties', { query })
}
