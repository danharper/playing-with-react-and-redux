import React, { Component, PropTypes } from 'react'
import formatDate from './formatDate'

export default class ConductDate extends Component {
  static propTypes = {
    date: PropTypes.string.isRequired,
  }
  render() {
    return (
      <div>
        {formatDate(this.props.date)}
      </div>
    )
  }
}
