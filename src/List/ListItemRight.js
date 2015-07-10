import React, { Component, PropTypes } from 'react'

export default class ListItemRight extends Component {
  render() {
    return (
      <div style={{'background': 'blue'}}>
        {this.props.children}
      </div>
    )
  }
}
