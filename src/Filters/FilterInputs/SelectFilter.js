import React, { Component, PropTypes } from 'react'
import { FilterItem } from './FilterItem'

export default class SelectFilter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onActive: PropTypes.func.isRequired,
    onInactive: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired, // Map
    value: PropTypes.any,
  }
  render() {
    const { title, value } = this.props
    return (
      <FilterItem title={title} onOpen={::this.opened} onClose={::this.closed}>
        <select onChange={::this.changed} value={value}>
          {this.renderOptions()}
        </select>
      </FilterItem>
    )
  }
  renderOptions() {
    const { options } = this.props
    return [
      for ([k,v] of options)
        <option key={k} value={k}>{v}</option>
    ]
  }
  changed(e) {
    this.props.onChange(e.nativeEvent.target.value)
  }
  opened() {
    this.props.onActive()
  }
  closed() {
    this.props.onInactive()
  }
}
