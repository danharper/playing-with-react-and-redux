import React, { Component, PropTypes } from 'react'

export class FilterItem extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onOpen: PropTypes.func,
    onClose: PropTypes.func,
  }
  state = { open: false }
  render() {
    return (
      <div className="list__filter">
        <div className="list__filter__head" onClick={::this.toggle}>
          {this.props.title}
          <div className="list__filter__head__arrow">
            {this.state.open ? '▼' : '▲'}
          </div>
        </div>
        {this.state.open && (
          <div className="list__filter__body">
            {this.props.children}
          </div>
        )}
      </div>
    )
  }
  toggle() {
    if (this.state.open) {
      this.props.onClose && this.props.onClose()
    }
    else {
      this.props.onOpen && this.props.onOpen()
    }

    this.setState({ open: ! this.state.open })
  }
}
