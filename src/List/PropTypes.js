import { PropTypes } from 'react'

const ListShape = PropTypes.shape({
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.any,
})

const PaginationShape = PropTypes.shape({
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  hasNext: PropTypes.bool.isRequired,
  hasPrev: PropTypes.bool.isRequired,
})

export { FiltersPropType } from '../Filters/FiltersList'

export const ComponentPropType = {
  // state
  list: ListShape.isRequired,
  currentFilters: PropTypes.object.isRequired,
  pagination: PaginationShape.isRequired,
  // actions
  filterList: PropTypes.func.isRequired,
  nextPage: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  goToPage: PropTypes.func.isRequired,
}

export const ComponentContainerPropType = {
  list: ListShape.isRequired,
  filters: PropTypes.object.isRequired,
  pagination: PaginationShape.isRequired,
}
