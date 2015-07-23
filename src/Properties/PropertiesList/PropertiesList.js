import React, { Component, PropTypes } from 'react'
import { app as PropertiesListApp } from './core'
import PropertyListItem from './ListItem'

export default class PropertiesList extends Component {

  render() {
    return (
      <PropertiesListApp>
        {::this.renderListItem}
      </PropertiesListApp>
    )
  }

  renderListItem(property) {
    return <PropertyListItem key={property.id} property={property} onClick={::this.clicked} />
  }

  clicked(property) {
    alert(`You clicked ${property.id}!`)
  }

}
