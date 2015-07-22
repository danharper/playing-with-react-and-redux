import React, { Component, PropTypes } from 'react'
import { provide } from 'react-redux'
import store from './store'
import InspectionsListContainer from './Inspections/InspectionsList/InspectionsListContainer'
import { PropertiesList } from './Properties/PropertiesList/PropertiesList'

@provide(store)
export default class App extends Component {
  render() {
    console.log('AA', PropertiesList)
    // return <InspectionsListContainer />
    return <PropertiesList />
    // return <NewList />
  }
}
