var exConfig = {
  storeNames: {
    filters: 'propertiesListFilters',
    pagination: 'propertiesListPagination',
    data: 'propertiesList',
  },
  actionTypes: {
    request: ['FETCH_PROPERTIES', 'FETCH_PROPERTIES_SUCCESS', 'FETCH_PROPERTIES_ERROR'],
    filter: 'PROPERTIES_LIST_FILTER_CHANGED',
  },
  fetch({ query }) {
    return api('properties', { query })
  }
}

export default function createListActions(config) {

  const { storeNames, actionTypes, fetch: FETCH_LIST } = config

  const {
    filters: STORE_NAME_FILTERS,
    pagination: STORE_NAME_PAGINATION,
    data: STORE_NAME_DATA,
  } = storeNames

  const {
    request: ACTION_TYPE_REQUEST_LIST,
    filter: ACTION_TYPE_CHANGE_FILTER,
  } = actionTypes


  const fetchList = (dispatch, getState) => {
    dispatch({
      types: ACTION_TYPE_REQUEST_LIST,
      payload: FETCH_LIST({ query: getState()[STORE_NAME_FILTERS] })
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
    let currentPage = getState()[STORE_NAME_FILTERS].page
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
