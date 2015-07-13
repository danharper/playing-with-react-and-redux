const initialState = {
  loading: false,
  data: [],
  error: null
}

export function clientsSelect(state = initialState, action) {
  switch (action.type) {
    case 'CLIENTS_SELECT_LOADING':
      return {...state, loading: true, error: null}
    case 'CLIENTS_SELECT':
      return {...state, loading: false, data: action.payload, error: null}
    case 'CLIENTS_SELECT_FAILED':
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}
