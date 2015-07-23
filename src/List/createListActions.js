import actionTypes from './actionTypes'

export default function createListActions(config) {
  const { storeName: STORE_NAME, fetch: FETCH_LIST } = config

  const { REQUEST_LIST_ACTION, CHANGE_FILTER_ACTION } = actionTypes(config.actionTypeNamespace)


  const fetchList = (dispatch, getState) => {
    dispatch({
      types: REQUEST_LIST_ACTION,
      payload: FETCH_LIST({ query: getState()[STORE_NAME].filters })
    })
  }

  const filterList = (filter, value) => dispatch => {
    dispatch({
      type: CHANGE_FILTER_ACTION,
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
