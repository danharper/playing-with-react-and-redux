import api from '../../../api'
import sleep from '../../../sleep'

let toError = true // fake error on first request just to demo UI

export const loadClients = () => async dispatch => {
  dispatch({ type: 'CLIENTS_SELECT_LOADING' })
  try {
    let payload = await api('clients')
    await sleep(500)
    if (toError) {
      toError = false
      throw 'WOAH!'
    }
    dispatch({ type: 'CLIENTS_SELECT', payload: payload.data })
  }
  catch (e) {
    dispatch({ type: 'CLIENTS_SELECT_FAILED', payload: e })
  }
}
