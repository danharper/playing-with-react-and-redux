export default async endpoint => {
  let raw = await fetch(`http://ib.api/${endpoint}?per_page=2`, { headers: { 'X-Be': 1 }})
  return (await raw.json()).data
}
