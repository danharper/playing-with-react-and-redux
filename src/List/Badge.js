import React, { Component, PropTypes } from 'react'

export default class Badge extends Component {
  render() {
    let background = this.props.icon === 'client' ? 'yellow' : 'pink'
    return (
      <div style={{ background }}>
        {this.props.children}
      </div>
    )
  }
}
