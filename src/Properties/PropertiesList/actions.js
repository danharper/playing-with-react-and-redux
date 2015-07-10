import api from '../../api'

export const filterList = (filter, value) => async dispatch => {
  dispatch({ type: 'FILTER_CHANGED', payload: {
    field: filter,
    value
  }})
  dispatch({ type: 'PROPERTIES_LOADING' })
  let payload = await api('properties')
  dispatch({ type: 'PROPERTIES', payload })
}
