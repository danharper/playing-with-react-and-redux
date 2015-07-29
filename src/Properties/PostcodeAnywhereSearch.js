import React, { Component, PropTypes } from 'react'

export default class PostcodeAnywhereSearch extends Component {

  static propTypes = {
    onChange: PropTypes.func.isRequired,
    onError: PropTypes.func
  }

  render() {
    const { onChange, onError, ...rest } = this.props
    return <button {...rest} onClick={::this.fakeSelection}>Fake Selecting an Address</button>
    return (
      <input name="input" />
    )
  }

  fakeSelection() {
    this.props.onChange({
      line1: 'Flat 36',
      line2: 'Brecon House',
      line3: 'The Canalside',
      line4: 'Gunwharf Quays',
      city: 'Portsmouth',
      county: 'Hampshire',
      postcode: 'PO1 3BP'
    })
  }

}
