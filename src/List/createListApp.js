import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import FilteredList from './FilteredList'
import createListActions from './createListActions'
import createListReducers from './createListReducers'
import { ComponentContainerPropType } from './PropTypes'
import { storeNames } from './createNamespaces'

export default function create({ storeNamespace, actionTypeNamespace, filters, fetch }) {

  const ACTIONS = createListActions({
    storeNamespace, actionTypeNamespace, fetch
  })

  const REDUCERS = createListReducers({
    storeNamespace, actionTypeNamespace
  })

  @connect(state => {
    const names = storeNames(storeNamespace)
    return {
      list: state[names.list],
      filters: state[names.filters],
      pagination: state[names.pagination],
    }
  })
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
    app: ListComponent,
    reducers: REDUCERS,
  }
}
