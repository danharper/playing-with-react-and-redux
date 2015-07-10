import React, { Component, PropTypes } from 'react'
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import * as PropertiesListActions from './actions'
import PropertiesList from './PropertiesList'

@connect(state => ({
  propertiesList: state.propertiesList
}))
export default class PropertiesListContainer extends Component {
  static propTypes = {
    propertiesList: PropTypes.shape({
      data: PropTypes.arrayOf(PropTypes.object).isRequired,
      loading: PropTypes.bool.isRequired,
      error: PropTypes.any,
      filters: PropTypes.object.isRequired,
    }).isRequired,
    dispatch: PropTypes.func.isRequired,
  }
  render() {
    const { propertiesList, dispatch } = this.props
    return (
      <PropertiesList
        items={propertiesList.data}
        loading={propertiesList.loading}
        error={propertiesList.error}
        currentFilters={propertiesList.filters}
        {...bindActionCreators(PropertiesListActions, dispatch)} />
    )
  }
}
