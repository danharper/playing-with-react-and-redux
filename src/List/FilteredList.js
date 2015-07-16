import React, { Component, PropTypes } from 'react'
import List from './List'
import FiltersList, { FiltersPropType } from '../Filters/FiltersList'

export default class FilteredList extends Component {
  static propTypes = {
    ...List.propTypes,
    filters: FiltersPropType,
    currentFilters: PropTypes.object.isRequired,
    filterList: PropTypes.func.isRequired,
    pagination: PropTypes.object.isRequired,
    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    goToPage: PropTypes.func.isRequired,
  }
  render() {
    const pagination = this.renderPagination()
    return (
      <div className="filtered-list">
        {pagination}
        {this.renderList()}
        {this.renderFilters()}
        {pagination}
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
  renderPagination() {
    const { previousPage, nextPage, loading } = this.props
    const { currentPage, hasNext, hasPrev } = this.props.pagination
    return (
      <div>
        <button disabled={!hasPrev || loading} onClick={previousPage}>Prev</button>
        <div>{currentPage}</div>
        <button disabled={!hasNext || loading} onClick={nextPage}>Next</button>
      </div>
    )
  }
}
