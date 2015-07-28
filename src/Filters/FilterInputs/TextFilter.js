import React, { Component, PropTypes } from 'react'
import { FilterItem } from './FilterItem'

export default class TextFilter extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    onActive: PropTypes.func.isRequired,
    onInactive: PropTypes.func.isRequired,
    type: PropTypes.string,
    value: PropTypes.string,
  }
  static defaultProps = {
    type: 'text'
  }
  render() {
    const { title, type, value } = this.props
    return (
      <FilterItem title={title} onOpen={::this.opened} onClose={::this.closed}>
        <input type={type} value={value} onChange={::this.changed} />
      </FilterItem>
    )
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
