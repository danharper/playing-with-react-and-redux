import { combineReducers } from 'redux'
import { CHANGE_PROPERTY_FIELD, MANUALLY_EDIT_ADDRESS } from './types'

const initialFields = {
  line1: null,
  line2: null,
  line3: null,
  line4: null,
  city: null,
  county: null,
  postcode: null,
}

function fields(state = initialFields, action) {
  if (action.type === CHANGE_PROPERTY_FIELD) {
    return {
      ...state,
      [action.payload.field]: action.payload.value
    }
  }

  return state
}

function manuallyEditingAddress(state = false, action) {
  if (action.type === MANUALLY_EDIT_ADDRESS) {
    return true
  }

  return state
}

export const addProperty = combineReducers({
  fields, manuallyEditingAddress
})
