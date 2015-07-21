import React, { Component, PropTypes } from 'react'
import { FilteredList } from '../../List'
import { TEXT, SELECT, CLIENT_SELECT } from '../../Filters/FilterInputs'
import PropertyListItem from './ListItem'

const FILTERS = [
  { field: 'address', name: 'Address', type: TEXT },
  { field: 'client_id', name: 'Client!', type: CLIENT_SELECT },
  { field: 'client', name: 'Client', type: SELECT, options: new Map([
    [null, null],
    [5, 'Nick'],
    [6, 'Obama 2012'],
    [29, 'Mr Client'],
    [211, 'Steve'],
  ]) }
  // { field: 'ref', name: 'Reference', type: FILTER.TEXT }
]

export default class PropertiesList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    currentFilters: PropTypes.object.isRequired,
    filterList: PropTypes.func.isRequired,
    pagination: PropTypes.object.isRequired,
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    goToPage: PropTypes.func.isRequired,
  }

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
    return <PropertyListItem key={property.id} property={property} onClick={::this.clicked} />
  }
  
  clicked(property) {
    alert(`You clicked ${property.id}!`)
  }
}
