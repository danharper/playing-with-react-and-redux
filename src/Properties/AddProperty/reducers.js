import { combineReducers } from 'redux'
import { CHANGE_ADDRESS_FIELD, MANUALLY_EDIT_ADDRESS, CHANGE_DETAILS_FIELD } from './types'

const initialAddress = { line1: null, line2: null, line3: null, line4: null, city: null, county: null, postcode: null }
const initialDetails = { type: 'House', detachment: null, furnishing: null }

function address(state = initialAddress, action) {
  if (action.type === CHANGE_ADDRESS_FIELD)
    return _addFieldValue(state, action)
  else
    return state
}

function manuallyEditingAddress(state = false, action) {
  if (action.type === MANUALLY_EDIT_ADDRESS)
    return true
  else
    return state
}

function details(state = initialDetails, action) {
  if (action.type === CHANGE_DETAILS_FIELD)
    return _addFieldValue(state, action)
  else
    return state
}

function _addFieldValue(state, action) {
  return {
    ...state,
    [action.payload.field]: action.payload.value
  }
}

export const addProperty = combineReducers({
  address, manuallyEditingAddress, details
})
