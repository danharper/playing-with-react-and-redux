import React, { Component, PropTypes } from 'react'

export default class Pagination extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,

    currentPage: PropTypes.number.isRequired,
    hasNext: PropTypes.bool.isRequired,
    hasPrev: PropTypes.bool.isRequired,

    nextPage: PropTypes.func.isRequired,
    previousPage: PropTypes.func.isRequired,
    goToPage: PropTypes.func.isRequired,
  }

  static defaultProps = {
    disabled: false
  }

  render() {
    const {
      disabled,
      currentPage,
      hasNext,
      hasPrev,
      nextPage,
      previousPage,
      goToPage,
    } = this.props

    return (
      <div className="pagination">
        <div className="pagination__details">
          Page
          <span className="pagination__details__current">{currentPage}</span>
          of
          <span className="pagination__details__total">X</span>
        </div>
        <div className="pagination__prev-next">
          <button
            disabled={!hasPrev || disabled}
            onClick={previousPage}
            className="pagination__prev-next__button"
          >Prev</button>
          <button
            disabled={!hasNext || disabled}
            onClick={nextPage}
            className="pagination__prev-next__button"
          >Next</button>
        </div>
      </div>
    )
  }
}
