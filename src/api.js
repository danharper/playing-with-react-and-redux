import queryString from 'query-string'

const apiUrl = 'http://ib.api'

const qs = query => queryString.stringify({ ...query, per_page: 2 })

const url = (endpoint, query) => apiUrl + '/' + endpoint + '?' + qs(query)

export default async (endpoint, { query = {} }) => {
  let raw = await fetch(url(endpoint, query), { headers: { 'X-Be': 1 }})
  return (await raw.json()).data
}
