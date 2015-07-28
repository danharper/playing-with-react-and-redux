import React, { Component, PropTypes } from 'react'

export default class ListItemRight extends Component {
  render() {
    return (
      <div className="list__item__right" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
