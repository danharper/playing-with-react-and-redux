import React, { Component, PropTypes } from 'react'

export default class ListItemLeft extends Component {
  render() {
    return (
      <div style={{'background': 'red'}}>
        {this.props.children}
      </div>
    )
  }
}
