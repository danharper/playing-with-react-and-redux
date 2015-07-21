import React, { Component, PropTypes } from 'react'
import { FilteredList } from '../../List'
import { TEXT, SELECT, CLIENT_SELECT } from '../../Filters/FilterInputs'
import InspectionListItem from './ListItem'
import { ComponentPropType } from '../../List/PropTypes'

const FILTERS = [
  { field: 'address', name: 'Address', type: TEXT },
  { field: 'client_id', name: 'Client!', type: CLIENT_SELECT },
]

export default class InspectionsList extends Component {
  static propTypes = ComponentPropType

  componentWillMount() {
    this.props.goToPage(1);
  }

  render() {
    return (
      <FilteredList {...this.props} filters={FILTERS}>
        {::this.renderListItem}
      </FilteredList>
    )
  }

  renderListItem(property) {
    return <InspectionListItem key={property.id} inspection={property} onClick={::this.clicked} />
  }

  clicked(inspection) {
    alert(`Guess what? You clicked on ${inspection.id} :D`)
  }
}
