import React, { Component, PropTypes } from 'react'
import { connect } from 'redux/react'
import { bindActionCreators } from 'redux'
import { FilterItem } from './FilterItem'

export default class FetchingSelectFilter extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    list: PropTypes.arrayOf(PropTypes.object).isRequired,
    children: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    fetch: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.any,
  }
  render() {
    const { title } = this.props
    return (
      <FilterItem title={title} onOpen={::this.maybeLoadData} onClose={::this.noneSelected}>
        {this.renderBody()}
      </FilterItem>
    )
  }
  renderBody() {
    if (this.props.loading) {
      return <FilterItemLoading />
    }
    else if (this.props.error) {
      return <FilterItemError onRetry={::this.loadData} />
    }
    else {
      const { list, children: renderItem, value } = this.props
      return (
        <select onChange={::this.itemSelected} value={value}>
          <option></option>
          {list.map(renderItem)}
        </select>
      )
    }
  }
  maybeLoadData() {
    if (this.props.list.length === 0) this.loadData()
  }
  loadData() {
    this.props.fetch()
  }
  itemSelected(e) {
    this.props.onChange(e.target.value)
  }
  noneSelected() {
    this.props.onChange(null)
  }
}

export class FilterItemError extends Component {
  static propTypes = {
    onRetry: PropTypes.func
  }
  render() {
    return (
      <div className="list__filter__error">
        <div className="list__filter__error__message">:( Error</div>
        {this.props.onRetry && (
          <a className="list__filter__error__retry" onClick={::this.retry}>
            Retry?
          </a>
        )}
      </div>
    )
  }
  retry() {
    this.props.onRetry && this.props.onRetry()
  }
}

export class FilterItemLoading extends Component {
  render() {
    return (
      <div className="list__filter__loading">Loading&hellip;</div>
    )
  }
}
