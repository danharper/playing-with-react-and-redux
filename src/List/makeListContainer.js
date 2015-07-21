import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connectList } from './createStateSelector'
import ListContainerPropTypes from './ListContainerPropTypes'

export default function makeListContainer(ListComponent, storeNamespace, ListActions) {
  class ListContainer extends Component {
    static propTypes = ListContainerPropTypes
    render() {
      const { list, loading, error, filters, pagination, dispatch } = this.props

      return (
        <ListComponent
          items={list.data}
          loading={list.loading}
          error={list.error}
          currentFilters={filters}
          pagination={pagination}
          {...bindActionCreators(ListActions, dispatch)} />
      )
    }
  }

  return connectList(storeNamespace)(ListContainer)
}
