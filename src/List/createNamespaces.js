export function storeNames(namespace) {
  return {
    list: namespace,
    filters: `${namespace}Filters`,
    pagination: `${namespace}Pagination`,
  }
}

export function actionTypeNames(namespace) {
  const request = `${namespace}(FETCH)`
  return {
    request: [request, `${request}(SUCCESS)`, `${request}(ERROR)`],
    filter: `${namespace}(FILTER_CHANGED)`
  }
}
