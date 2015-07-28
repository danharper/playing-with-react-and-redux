import queryString from 'query-string'
import sleep from './sleep'

const apiUrl = 'http://ib.api'

const qs = query => queryString.stringify(query)

const url = (endpoint, query) => apiUrl + '/' + endpoint + '?' + qs(query)

let fakeError = true // fake error on first request just to demo UI

export default async (endpoint, opts = {}) => {
  let query = opts.query || {}

  if (endpoint === 'clients' && fakeError) {
    await sleep(400)
    fakeError = false
    throw new Error('WOAH!!')
  }

  let raw = await fetch(url(endpoint, query), { headers: { 'X-Be': 1 }})
  return await raw.json()
}
