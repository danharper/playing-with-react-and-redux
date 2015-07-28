import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import * as reducers from './reducers'
import middleware from './middleware'

console.debug('REDUCERS', reducers)

const finalCreateStore = compose(
  applyMiddleware(...middleware),
  createStore
)

export default finalCreateStore(
  combineReducers(reducers)
)
