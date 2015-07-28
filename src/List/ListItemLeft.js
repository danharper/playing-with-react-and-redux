import React, { Component, PropTypes } from 'react'

export default class ListItemLeft extends Component {
  render() {
    return (
      <div className="list__item__left" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
