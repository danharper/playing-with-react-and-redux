import api from '../../../api'
import { FETCH_CLIENTS_TYPES } from './types'

const getClientsList = async () => (await api('clients')).data

export const loadClients = () => ({
  types: FETCH_CLIENTS_TYPES,
  payload: getClientsList()
})
