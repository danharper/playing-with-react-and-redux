import actionTypes from './actionTypes'

export default function createListActions({
  actionTypeNamespace,
  storeName: STORE_NAME,
  fetch: FETCH_LIST
} : {
  actionTypeNamespace: string,
  storeName: string,
  fetch: func
}) {
  const { REQUEST_LIST_ACTION, CHANGE_FILTER_ACTION, DISABLE_FILTER_ACTION, ENABLE_FILTER_ACTION } = actionTypes(actionTypeNamespace)

  return {
    loadList: () => load,

    filterList: (field, value) => dispatch => {
      dispatch(changeFilter(field, value))
      dispatch(loadFirstPage)
    },

    enableFilter: field => dispatch => {
      dispatch(enableFilter(field))
      dispatch(loadFirstPage)
    },

    disableFilter: field => dispatch => {
      dispatch(disableFilter(field))
      dispatch(loadFirstPage)
    },

    nextPage: () => changePage(page => page + 1),

    previousPage: () => changePage(page => page - 1),

    goToPage: page => changePage(() => page),
  }

  function load(dispatch, getState) {
    dispatch({
      types: REQUEST_LIST_ACTION,
      payload: FETCH_LIST({ query: selectActiveFilters(getState()) })
    })
  }

  function changeFilter(field, value) {
    return {
      type: CHANGE_FILTER_ACTION,
      payload: { field, value }
    }
  }

  function disableFilter(filter) {
    return {
      type: DISABLE_FILTER_ACTION,
      payload: filter
    }
  }

  function enableFilter(filter) {
    return {
      type: ENABLE_FILTER_ACTION,
      payload: filter
    }
  }

  function changePage(pageChanger) {
    return (dispatch, getState) => {
      let nextPage = pageChanger(selectCurrentPage(getState()))
      dispatch(changeFilter('page', nextPage))
      dispatch(load)
    }
  }

  function loadFirstPage(dispatch) {
    dispatch(changePage(() => 1))
  }

  /* selectors */
  function selectActiveFilters(state) {
    const filters = selectFilters(state)
    return Object.keys(filters)
      .filter(field => filters[field].active && ! isUndefined(filters[field].value))
      .reduce((carry, field) => {
        carry[field] = filters[field].value
        return carry
      }, {})
  }

  function selectCurrentPage(state) {
    return selectFilters(state).page.value
  }

  function selectFilters(state) { return state[STORE_NAME].filters }

  function isUndefined(x) { return typeof x === 'undefined' }

}
