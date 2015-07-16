import React, { Component, PropTypes } from 'react'

export const FiltersPropType = PropTypes.arrayOf(PropTypes.shape({
  field: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.func.isRequired,
})).isRequired

export default class FiltersList extends Component {
  static propTypes = {
    filterChanged: PropTypes.func.isRequired,
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
    const { currentFilters } = this.props
    const current = currentFilters[filter.field]
    return filter.type(filter, current, this.props.filterChanged)
  }
}
