import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as InspectionsListActions from './actions'
import InspectionsList from './InspectionsList'

@connect(state => ({
  data: state.inspectionsList,
  filters: state.inspectionsListFilters,
  pagination: state.inspectionsListPagination
}))
export default class InspectionsListContainer extends Component {

  static propTypes = {
    // state
    data: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.any,
    }).isRequired,
    filters: PropTypes.object.isRequired,
    pagination: PropTypes.object.isRequired,
    // redux
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    console.log('!!', this.props)
    const { data, loading, error, filters, pagination, dispatch } = this.props

    return (
      <InspectionsList
        items={data.data}
        loading={data.loading}
        error={data.error}
        currentFilters={filters}
        pagination={pagination}
        {...bindActionCreators(InspectionsListActions, dispatch)} />
    )
  }

}
