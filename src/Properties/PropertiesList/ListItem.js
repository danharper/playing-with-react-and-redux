import React, { Component, PropTypes } from 'react'
import { ListItem, ListItemLeft, ListItemRight, Badge } from '../../List'

export default class PropertyListItem extends Component {
  static propTypes = {
    property: PropTypes.object.isRequired,
  }
  render() {
    const { property } = this.props
    return (
      <ListItem onClick={::this.clicked}>
        <ListItemLeft>
          <p>{property.address.line1}</p>
          <p>{property.address.city}, {property.address.postcode}</p>
        </ListItemLeft>
        <ListItemRight>
          {property.client && <ClientBadge>{property.client.name}</ClientBadge>}
        </ListItemRight>
      </ListItem>
    )
  }
  clicked() {
    alert(`You clicked property #${this.props.property.id}`)
  }
}

class ClientBadge extends Badge {
  static defaultProps = {
    icon: 'client'
  }
}
