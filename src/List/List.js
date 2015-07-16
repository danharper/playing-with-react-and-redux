import React, { Component, PropTypes } from 'react'
import Spinner from '../Spinner'

export default class List extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.any,
    children: PropTypes.func.isRequired,
  }
  render() {
    const { items, loading, error } = this.props
    return (
      <div className="list">
        {loading && <Spinner />}
        {error && <ListError error={error} />}
        <ul>
          {items.map(::this.renderListItem)}
        </ul>
      </div>
    )
  }
  renderListItem(item) {
    return this.props.children(item)
  }
}

class ListError extends Component {
  render() {
    return (
      <strong style={{display: 'block', color: 'red'}}>
        There was an error :(
      </strong>
    )
  }
}
