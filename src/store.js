import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import * as reducers from './reducers'

const middleware = [ thunk ]
const createAppStore = applyMiddleware(...middleware)(createStore)

export default createAppStore(combineReducers(reducers))
