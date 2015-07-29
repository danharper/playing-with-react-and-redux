import { CHANGE_ADDRESS_FIELD, MANUALLY_EDIT_ADDRESS } from './types'

export const changeAddressField = (field, value) => ({
  type: CHANGE_ADDRESS_FIELD,
  payload: { field, value }
})

export const manuallyEditAddress = () => ({
  type: MANUALLY_EDIT_ADDRESS
})
