import React, { Component, PropTypes } from 'react'

export default class Pagination extends Component {
  static propTypes = {
    disabled: PropTypes.bool.isRequired,

    currentPage: PropTypes.number.isRequired,
    totalPages: PropTypes.number.isRequired,
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
      totalPages,
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
          <span className="pagination__details__current">
            <PaginationPagesSelect
              current={currentPage}
              total={totalPages}
              onChange={goToPage} />
          </span>
          of
          <span className="pagination__details__total">{totalPages}</span>
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

class PaginationPagesSelect extends Component {
  static propTypes = {
    current: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
  }
  render() {
    const { current } = this.props
    return (
      <select value={current} onChange={::this.changed}>
        {this.renderOptions()}
      </select>
    )
  }
  renderOptions() {
    const { total } = this.props
    let out = []
    for (let i = 1; i <= total; i++) {
      out.push(<option key={i}>{i}</option>)
    }
    return out
  }
  changed(e) {
    this.props.onChange(e.target.value)
  }
}
