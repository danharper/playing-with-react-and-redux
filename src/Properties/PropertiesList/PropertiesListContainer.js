import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as PropertiesListActions from './actions'
import PropertiesList from './PropertiesList'

@connect(state => state.propertiesList)
export default class PropertiesListContainer extends Component {

  static propTypes = {
    // state
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    filters: PropTypes.object.isRequired,
    // redux
    dispatch: PropTypes.func.isRequired,
  }

  render() {
    const { data, loading, error, filters, dispatch } = this.props

    return (
      <PropertiesList
        items={data}
        loading={loading}
        error={error}
        currentFilters={filters}
        {...bindActionCreators(PropertiesListActions, dispatch)} />
    )
  }

}
