import React, { Component, PropTypes } from 'react'
import { App } from './core'
import PropertyListItem from './ListItem'

export default class PropertiesList extends Component {

  render() {
    return (
      <App>
        {::this.renderListItem}
      </App>
    )
  }

  renderListItem(property) {
    return <PropertyListItem key={property.id} property={property} onClick={::this.clicked} />
  }

  clicked(property) {
    alert(`You clicked ${property.id}!`)
  }

}
