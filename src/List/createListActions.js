import actionTypes from './actionTypes'

export default function createListActions(config) {
  const { storeName: STORE_NAME, fetch: FETCH_LIST } = config

  const { REQUEST_LIST_ACTION, CHANGE_FILTER_ACTION } = actionTypes(config.actionTypeNamespace)

  return {
    filterList,
    nextPage,
    previousPage: prevPage,
    goToPage,
  }

  function fetchList(dispatch, getState) {
    dispatch({
      types: REQUEST_LIST_ACTION,
      payload: FETCH_LIST({ query: getState()[STORE_NAME].filters })
    })
  }

  function filterList(filter, value) {
    return dispatch => {
      dispatch({
        type: CHANGE_FILTER_ACTION,
        payload: { [filter]: value }
      })

      dispatch(fetchList)
    }
  }

  function fetchPage(pageChanger) {
    return (dispatch, getState) => {
      let currentPage = getState()[STORE_NAME].filters.page
      let nextPage = pageChanger(currentPage)
      dispatch(filterList('page', nextPage))
    }
  }

  function nextPage() {
    return dispatch => {
      dispatch(fetchPage(currentPage => currentPage + 1))
    }
  }

  function prevPage() {
    return dispatch => {
      dispatch(fetchPage(currentPage => currentPage - 1))
    }
  }

  function goToPage(page) {
    return dispatch => {
      dispatch(fetchPage(() => page))
    }
  }

}
