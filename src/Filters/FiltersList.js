import React, { Component, PropTypes } from 'react'

export const FiltersPropType = PropTypes.arrayOf(PropTypes.shape({
  field: PropTypes.string.isRequired,
  make: PropTypes.func.isRequired,
})).isRequired

export default class FiltersList extends Component {
  static propTypes = {
    filterChanged: PropTypes.func.isRequired,
    filterEnabled: PropTypes.func.isRequired,
    filterDisabled: PropTypes.func.isRequired,
    currentFilters: PropTypes.object.isRequired,
    filters: FiltersPropType,
  }
  render() {
    const { filters } = this.props
    return (
      <div className="filters">
        {filters.map(filter => (
          <div key={filter.field}>
            {this.renderRow(filter)}
          </div>
        ))}
      </div>
    )
  }
  renderRow(filter) {
    return filter.make({
      current: this.getCurrentFilterValue(filter.field),
      onChange: this.props.filterChanged,
      onActive: this.props.filterEnabled,
      onInactive: this.props.filterDisabled
    })
  }
  getCurrentFilterValue(field) {
    return (this.props.currentFilters[field] || {}).value
  }
}
