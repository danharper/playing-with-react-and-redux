import React, { Component, PropTypes } from 'react'
import { provide } from 'react-redux'
import store from './store'
import { InspectionsList } from './Inspections/InspectionsList'
import { PropertiesList } from './Properties/PropertiesList'

@provide(store)
export default class App extends Component {
  render() {
    return <InspectionsList />
    // return <PropertiesList />
  }
}
