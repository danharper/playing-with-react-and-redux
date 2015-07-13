import React, { Component, PropTypes } from 'react'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { provide } from 'react-redux'
import thunk from 'redux-thunk'
import PropertiesListContainer from './Properties/PropertiesList/PropertiesListContainer'
import * as stores from './stores'

@provide(applyMiddleware(thunk)(createStore)(combineReducers(stores)))
export default class App extends Component {
  render() {
    return <PropertiesListContainer />
  }
}
