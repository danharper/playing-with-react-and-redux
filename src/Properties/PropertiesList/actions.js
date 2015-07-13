import api from '../../api'
import { FILTER_CHANGED, FETCH_PROPERTIES } from './types'

// const changeFilterFactory = actionType => (filter, value) => ({
//   type: actionType,
//   payload: { [filter]: value }
// })
//
// const changeFilter = changeFilterFactory(FILTER_CHANGED)

const changeFilter = (filter, value) => ({
  type: FILTER_CHANGED,
  payload: { [filter]: value }
})

const fetchProperties = () => async (dispatch, getState) => {
  const [ PENDING, SUCCESS, ERROR ] = FETCH_PROPERTIES

  dispatch({ type: PENDING })

  try {
    let response = await api('properties', { query: getState().propertiesListFilters })
    dispatch({ type: SUCCESS, payload: response })
  }
  catch (e) {
    dispatch({ type: ERROR, error })
  }
}

export const filterList = (filter, value) => dispatch => {
  dispatch(changeFilter(filter, value))
  dispatch(fetchProperties())
}

// export const filterList = combine(changeFilter, fetchProperties)
//
// function combine(...actions) {
//   return (...args) => dispatch => actions.forEach(action => dispatch(action(...args)))
// }
