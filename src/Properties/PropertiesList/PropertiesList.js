import React, { Component, PropTypes } from 'react'
import { FilteredList } from '../../List'
import FILTERS from './FILTERS'
import PropertyListItem from './ListItem'

export default class PropertiesList extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    currentFilters: PropTypes.object.isRequired,
    filterList: PropTypes.func.isRequired,
  }
  render() {
    return (
      <FilteredList {...this.props} filters={FILTERS}>
        {::this.renderListItem}
      </FilteredList>
    )
  }
  renderListItem(property) {
    return <PropertyListItem key={property.id} property={property} />
  }
}
