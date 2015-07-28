import React, { Component, PropTypes } from 'react'
import App from './core'
import ListItem from './ListItem'

export default class List extends Component {

  render() {
    return (
      <App>
        {::this.renderListItem}
      </App>
    )
  }

  renderListItem(inspection) {
    return <ListItem key={inspection.id} inspection={inspection} onClick={::this.clicked} />
  }

  clicked(inspection) {
    alert(`You clicked ${inspection.id}!`)
  }

}
