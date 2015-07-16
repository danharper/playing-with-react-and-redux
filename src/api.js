import queryString from 'query-string'

const apiUrl = 'http://ib.api'

const qs = query => queryString.stringify(query)

const url = (endpoint, query) => apiUrl + '/' + endpoint + '?' + qs(query)

export default async (endpoint, opts = {}) => {
  let query = opts.query || {}
  let raw = await fetch(url(endpoint, query), { headers: { 'X-Be': 1 }})
  return (await raw.json()).data
}
