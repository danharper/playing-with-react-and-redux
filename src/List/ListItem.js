import React, { Component, PropTypes } from 'react'

export default class ListItem extends Component {
  render() {
    return (
      <div className="list__item" {...this.props}>
        {this.props.children}
      </div>
    )
  }
}
