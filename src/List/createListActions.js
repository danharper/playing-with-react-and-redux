import actionTypes from './actionTypes'

export default function createListActions(config) {
  const { storeName: STORE_NAME, fetch: FETCH_LIST } = config
  const { REQUEST_LIST_ACTION, CHANGE_FILTER_ACTION } = actionTypes(config.actionTypeNamespace)

  return {
    loadList,
    filterList,
    nextPage,
    previousPage: prevPage,
    goToPage,
  }

  function loadList() {
    return load
  }

  function load(dispatch, getState) {
    dispatch({
      types: REQUEST_LIST_ACTION,
      payload: FETCH_LIST({ query: getState()[STORE_NAME].filters })
    })
  }

  function addFilter(filter, value) {
    return {
      type: CHANGE_FILTER_ACTION,
      payload: {
        [filter]: value
      }
    }
  }

  function filterList(filter, value) {
    return dispatch => {
      dispatch(addFilter(filter, value))
      dispatch(addFilter('page', 1))
      dispatch(load)
    }
  }

  function fetchPage(pageChanger) {
    return (dispatch, getState) => {
      let currentPage = getState()[STORE_NAME].filters.page
      let nextPage = pageChanger(currentPage)
      dispatch(addFilter('page', nextPage))
      dispatch(load)
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
