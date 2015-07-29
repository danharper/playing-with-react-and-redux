import { CHANGE_PROPERTY_FIELD, MANUALLY_EDIT_ADDRESS } from './types'

export const changePropertyField = (field, value) => ({
  type: CHANGE_PROPERTY_FIELD,
  payload: { field, value }
})

export const manuallyEditAddress = (choice: bool) => ({
  type: MANUALLY_EDIT_ADDRESS,
  payload: choice
})
