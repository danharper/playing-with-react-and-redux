const initialState = {
  loading: false,
  data: [],
  filters: {
    client: 6,
    client_id: 5,
  },
  error: null
}

export function propertiesList(state = initialState, action) {
  switch (action.type) {
    case 'FILTER_CHANGED':
      let filters = {...state.filters, [action.payload.field]: action.payload.value}
      return {...state, filters}
    case 'PROPERTIES_LOADING':
      return {...state, loading: true}
    case 'PROPERTIES':
      return {...state, loading: false, data: action.payload}
    default:
      return state
  }
}
