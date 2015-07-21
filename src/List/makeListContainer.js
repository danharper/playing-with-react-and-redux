import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { stateSelector } from './createStateSelector'
import { ComponentContainerPropType } from './PropTypes'

export default function makeListContainer(ListComponent, storeNamespace, ListActions) {
  @connect(stateSelector(storeNamespace))
  class ListContainer extends Component {
    static propTypes = ComponentContainerPropType

    render() {
      const { list, filters, pagination, dispatch } = this.props
      return (
        <ListComponent
          list={list}
          currentFilters={filters}
          pagination={pagination}
          {...bindActionCreators(ListActions, dispatch)} />
      )
    }
  }

  return ListContainer
}
