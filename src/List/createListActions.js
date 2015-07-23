var exConfig = {
  storeName: 'propertiesList',
  actionTypeNamespace: 'PROPERTIES_LIST',
  fetch({ query }) {
    return api('properties', { query })
  }
}

import { storeNames, actionTypeNames } from './createNamespaces'

export default function createListActions(config) {

  const { storeName: STORE_NAME, actionTypeNamespace, fetch: FETCH_LIST } = config

  const {
    request: ACTION_TYPE_REQUEST_LIST,
    filter: ACTION_TYPE_CHANGE_FILTER,
  } = actionTypeNames(actionTypeNamespace)


  const fetchList = (dispatch, getState) => {
    dispatch({
      types: ACTION_TYPE_REQUEST_LIST,
      payload: FETCH_LIST({ query: getState()[STORE_NAME].filters })
    })
  }

  const filterList = (filter, value) => dispatch => {
    dispatch({
      type: ACTION_TYPE_CHANGE_FILTER,
      payload: { [filter]: value }
    })

    dispatch(fetchList)
  }

  const fetchPage = pageChanger => (dispatch, getState) => {
    let currentPage = getState()[STORE_NAME].filters.page
    let nextPage = pageChanger(currentPage)
    dispatch(filterList('page', nextPage))
  }

  const nextPage = () => dispatch => {
    dispatch(fetchPage(currentPage => currentPage + 1))
  }

  const prevPage = () => dispatch => {
    dispatch(fetchPage(currentPage => currentPage - 1))
  }

  const goToPage = page => dispatch => {
    dispatch(fetchPage(() => page))
  }



  return {
    /* action creators.. */
    filterList,
    nextPage,
    previousPage: prevPage,
    goToPage,
  }

}
