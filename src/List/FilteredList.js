import React, { Component, PropTypes } from 'react'
import List from './List'
import FiltersList, { FiltersPropType } from '../Filters/FiltersList'

export default class FilteredList extends Component {
  static propTypes = {
    ...List.propTypes,
    filters: FiltersPropType,
    currentFilters: PropTypes.object.isRequired,
    filterList: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div>
        {this.renderList()}
        {this.renderFilters()}
      </div>
    )
  }
  renderList() {
    const { items, loading, error } = this.props
    return (
      <List items={items} loading={loading} error={error}>
        {this.props.children}
      </List>
    )
  }
  renderFilters() {
    const { filterList, currentFilters, filters } = this.props
    return (
      <FiltersList filterChanged={filterList} currentFilters={currentFilters} filters={filters} />
    )
  }
}
