import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilteredList from './FilteredList'
import createListActions from './createListActions'
import createListReducers from './createListReducers'
import { ComponentContainerPropType } from './PropTypes'
import { storeNames } from './createNamespaces'

export default function create({ storeName, actionTypeNamespace, filters, fetch }) {

  const ACTIONS = createListActions({
    storeName, actionTypeNamespace, fetch
  })

  const REDUCERS = createListReducers(actionTypeNamespace)

  @connect(state => state[storeName])
  class ListComponent extends Component {
    static propTypes = ComponentContainerPropType

    componentWillMount() {
      this.actions = bindActionCreators(ACTIONS, this.props.dispatch)
      this.actions.goToPage(1)
    }

    render() {
      const { list, filters:currentFilters, pagination, dispatch } = this.props

      return (
        <FilteredList
          {...{list, currentFilters, filters, pagination}}
          {...this.actions}
        >
          {this.props.children}
        </FilteredList>
      )
    }
  }

  return {
    App: ListComponent,
    reducers: REDUCERS,
  }
}
