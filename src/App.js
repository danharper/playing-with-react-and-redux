import React, { Component, PropTypes } from 'react'
import { provide } from 'react-redux'
import store from './store'
import InspectionsListContainer from './Inspections/InspectionsList/InspectionsListContainer'

@provide(store)
export default class App extends Component {
  render() {
    return <InspectionsListContainer />
  }
}
