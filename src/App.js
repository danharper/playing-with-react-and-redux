import React, { Component, PropTypes } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { provide } from 'react-redux'
import thunk from 'redux-thunk'
import PropertiesListContainer from './Properties/PropertiesList/PropertiesListContainer'
import * as reducers from './reducers'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)

const store = createStoreWithMiddleware(combineReducers(reducers))

@provide(store)
export default class App extends Component {
  render() {
    return <PropertiesListContainer />
  }
}
