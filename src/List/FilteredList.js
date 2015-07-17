import React, { Component, PropTypes } from 'react'
import List from './List'
import FiltersList, { FiltersPropType } from '../Filters/FiltersList'
import Pagination from './Pagination'

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
        <div className="filtered-list__list-wrapper">
          <div className="filtered-list__pagination-wrapper--top">
            {pagination}
          </div>
          {this.renderList()}
          <div className="filtered-list__pagination-wrapper--bottom">
            {pagination}
          </div>
        </div>
        <div className="filtered-list__filters-wrapper">
          {this.renderFilters()}
        </div>
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
    const { previousPage, nextPage, goToPage, loading, pagination } = this.props
    const { currentPage, hasNext, hasPrev } = pagination
    return (
      <Pagination
        disabled={loading}
        currentPage={currentPage}
        hasNext={hasNext}
        hasPrev={hasPrev}
        nextPage={nextPage}
        previousPage={previousPage}
        goToPage={goToPage}
        />
    )
  }
}
