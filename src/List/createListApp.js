import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilteredList from './FilteredList'
import createListActions from './createListActions'
import { ComponentContainerPropType } from './PropTypes'

export default function create({ storeName, actionTypeNamespace, filters: FILTERS, fetch }) {

  const ACTIONS = createListActions({ storeName, actionTypeNamespace, fetch })

  @connect(state => state[storeName])
  class ListComponentConnector extends Component {
    static propTypes = ComponentContainerPropType

    render() {
      const { list, filters:currentFilters, pagination, dispatch } = this.props

      return (
        <FilteredList {...{
          list,
          currentFilters,
          filters: FILTERS,
          pagination,
          ...bindActionCreators(ACTIONS, dispatch)
        }}>
          {this.props.children}
        </FilteredList>
      )
    }
  }

  return ListComponentConnector
}
