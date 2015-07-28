export default function actionTypes(namespace) {
  const request = `${namespace}(FETCH)`
  return {
    REQUEST_LIST_ACTION: [request, `${request}(SUCCESS)`, `${request}(ERROR)`],
    CHANGE_FILTER_ACTION: `${namespace}(FILTER_CHANGED)`,
    ENABLE_FILTER_ACTION: `${namespace}(FILTER_ENABLED)`,
    DISABLE_FILTER_ACTION: `${namespace}(FILTER_DISABLED)`,
  }
}
