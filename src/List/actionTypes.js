import { makeAsyncTypes } from '../support'

export default function actionTypes(namespace) {
  return {
    REQUEST_LIST_ACTION: makeAsyncTypes(`${namespace}(FETCH)`),
    CHANGE_FILTER_ACTION: `${namespace}(FILTER_CHANGED)`,
    ENABLE_FILTER_ACTION: `${namespace}(FILTER_ENABLED)`,
    DISABLE_FILTER_ACTION: `${namespace}(FILTER_DISABLED)`,
  }
}
