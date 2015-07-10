import React, { Component, PropTypes } from 'react'
import { FilterItem } from './FilterItem'

export default class SelectFilter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    field: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired, // Map
    value: PropTypes.any,
  }
  render() {
    const { title, value } = this.props
    return (
      <FilterItem title={title} onClose={::this.clear}>
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
    this.triggerChange(e.target.value)
  }
  clear() {
    this.triggerChange(null)
  }
  triggerChange(value) {
    const { onChange, field } = this.props
    onChange(field, value)
  }
}
