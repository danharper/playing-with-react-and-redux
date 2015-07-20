import React, { Component, PropTypes } from 'react'
import { ListItem, ListItemLeft, ListItemRight, Badge } from '../../List'
import moment from 'moment'

export default class InspectionListItem extends Component {
  static propTypes = {
    inspection: PropTypes.object.isRequired,
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
          <InspectionConductDate date={inspection.conduct_date} />
          <MaybeBadge icon="typist" maybe={inspection.typist} none="No Typist" />
          <MaybeBadge icon="clerk" maybe={inspection.clerk} none="No Clerk" />
        </ListItemRight>
      </ListItem>
    )
  }
  clicked() {
    alert(`You clicked inspection #${this.props.inspection.id}`)
  }
}

function formatConductDate(conductDate) {
  const DATE = 'DD MMMM YYYY'
  const TIME = 'HH:mm'
  let date = moment(conductDate)
  if (date.hours() === 0) {
    return date.format(DATE)
  }
  else {
    return date.format(`${DATE} [at] ${TIME}`)
  }
}

class InspectionConductDate extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        {formatConductDate(this.props.date)}
      </div>
    )
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

class ClientBadge extends Badge {
  static defaultProps = {
    icon: 'client'
  }
}
