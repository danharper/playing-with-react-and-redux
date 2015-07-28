import React, { Component, PropTypes } from 'react'

export default class Badge extends Component {
  render() {
    // let background = this.props.icon === 'client' ? 'yellow' : 'pink'
    return (
      <div className="list__item__badge" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
