import api from '../api'

export function getInspections({ query }) {
  return api('inspections', { query })
}
