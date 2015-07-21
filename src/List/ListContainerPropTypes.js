import { PropTypes } from 'react'

export default {
  // state
  list: PropTypes.shape({
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
  }).isRequired,
  filters: PropTypes.object.isRequired,
  pagination: PropTypes.object.isRequired,
  // redux
  dispatch: PropTypes.func.isRequired,
}
