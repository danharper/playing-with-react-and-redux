import { createStore, combineReducers, applyMiddleware } from 'redux'
import * as reducers from './reducers'
import middleware from './middleware'
console.info('REDUCERS', reducers)

const createAppStore = applyMiddleware(...middleware)(createStore)

export default createAppStore(combineReducers(reducers))
