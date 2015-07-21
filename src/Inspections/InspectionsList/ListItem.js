import React, { Component, PropTypes } from 'react'
import { ListItem, ListItemLeft, ListItemRight, Badge } from '../../List'
import ConductDate from '../ConductDate'

export default class InspectionListItem extends Component {
  static propTypes = {
    inspection: PropTypes.object.isRequired,
    onClick: PropTypes.func,
  }
  render() {
    const { inspection } = this.props
    const { property } = inspection
    return (
      <ListItem onClick={::this.clicked}>
        <ListItemLeft>
          <p>{inspection.type.name}</p>
          <p>{property.address.line1}</p>
          <p>{property.address.city}, {property.address.postcode}</p>
          <MaybeBadge icon="client" maybe={property.client} none="No Client" />
        </ListItemLeft>
        <ListItemRight>
          <p>{inspection.state.name}</p>
          <ConductDate date={inspection.conduct_date} />
          <MaybeBadge icon="typist" maybe={inspection.typist} none="No Typist" />
          <MaybeBadge icon="clerk" maybe={inspection.clerk} none="No Clerk" />
        </ListItemRight>
      </ListItem>
    )
  }
  clicked() {
    this.props.onClick && this.props.onClick(this.props.inspection)
  }
}

class MaybeBadge extends Component {
  static propTypes = {
    maybe: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
    icon: PropTypes.string,
    none: PropTypes.string.isRequired,
  }

  static defaultProps = {
    icon: 'apple'
  }

  render() {
    const { maybe, icon, none } = this.props

    if (maybe) {
      return (
        <div className="list__item__badge__wrapper">
          <Badge icon={icon} className="list__item__badge">{maybe.name}</Badge>
        </div>
      )
    }
    else {
      return (
        <div className="list__item__badge__wrapper">
          <Badge icon={icon} className="list__item__badge list__item__badge--empty">{none}</Badge>
        </div>
      )
    }
  }
}
