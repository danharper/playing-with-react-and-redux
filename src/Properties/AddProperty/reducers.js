import { combineReducers } from 'redux'
import { CHANGE_ADDRESS_FIELD, MANUALLY_EDIT_ADDRESS } from './types'

const initialFields = {
  line1: null,
  line2: null,
  line3: null,
  line4: null,
  city: null,
  county: null,
  postcode: null,
}

function address(state = initialFields, action) {
  if (action.type === CHANGE_ADDRESS_FIELD) {
    return _addFieldValue(state, action)
  }

  return state
}

function manuallyEditingAddress(state = false, action) {
  if (action.type === MANUALLY_EDIT_ADDRESS) {
    return true
  }

  return state
}

// function

function _addFieldValue(state, action) {
  return {
    ...state,
    [action.payload.field]: action.payload.value
  }
}

export const addProperty = combineReducers({
  address, manuallyEditingAddress
})
