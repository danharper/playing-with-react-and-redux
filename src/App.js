import React, { Component, PropTypes } from 'react'
import { createRedux } from 'redux'
import { provide } from 'redux/react'
import PropertiesListContainer from './Properties/PropertiesList/PropertiesListContainer'
import * as stores from './stores'

@provide(createRedux(stores))
export default class App extends Component {
  render() {
    return <PropertiesListContainer />
  }
}
