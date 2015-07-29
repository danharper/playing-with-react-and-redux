import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classnames from 'classnames'
import PostcodeAnywhere from '../PostcodeAnywhere'
import PostcodeAnywhereSearch from '../PostcodeAnywhereSearch'
import * as AddPropertyActions from './actions'

class InputFields extends Component {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string.isRequired,
      field: PropTypes.string.isRequired,
    })).isRequired,
    data: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
  }

  render() {
    const { fields, data } = this.props
    return (
      <div>
        {fields.map(({field, label}) =>
          <label key={field}><span>{label}</span><input name={field} value={data[field]} onChange={::this.changeField(field)} /></label>
        )}
      </div>
    )
  }

  changeField(field) {
    return e => this.props.onChange(field, e.nativeEvent.target.value)
  }
}



const addressFields = [
  { field: 'line1', label: 'Line 1' },
  { field: 'line2', label: 'Line 2' },
  { field: 'line3', label: 'Line 3' },
  { field: 'line4', label: 'Line 4' },
  { field: 'city', label: 'City' },
  { field: 'county', label: 'County' },
  { field: 'postcode', label: 'Postcode' },
]

class AddPropertyAddress extends Component {
  static propTypes = {
    address: PropTypes.object.isRequired,
    manuallyEditingAddress: PropTypes.bool.isRequired,
    changePropertyField: PropTypes.func.isRequired,
    manuallyEditAddress: PropTypes.func.isRequired,
  }

  render() {
    return this.props.manuallyEditingAddress ? this.renderEditAddress() : this.renderViewAddress()
  }

  renderEditAddress() {
    const { address, changePropertyField } = this.props
    return (
      <div className="address-box">
        <InputFields data={fields} fields={addressFields} onChange={changePropertyField} />
      </div>
    )
  }

  renderViewAddress() {
    return (
      <div>
        <PostcodeAnywhereSearch onChange={::this.changeFields} className="add-property__search" />

        {this.renderAddress()}

        <div className="edit-address-manually">
          <button onClick={::this.editAddress}>Having Problems? Enter Address Manually</button>
        </div>

      </div>
    )
  }

  renderAddress() {
    let fields = filledFields(this.props.address)

    return fields.length === 0 ? <div></div> : (
      <address className="address-box">
        {fields.map(([field, value]) => <p key={field}>{value}</p>)}
      </address>
    )
  }

  editAddress() {
    this.props.manuallyEditAddress()
  }

  changeFields(fields) {
    Object.keys(fields).forEach(field => this.props.changePropertyField(field, fields[field]))
  }

}

function filledFields(fields) {
  return Object.keys(fields)
    .map(field => [field, fields[field]])
    .filter(([field, value]) => value)
}

class AddProperty extends Component {
  render() {
    return (
      <div className="add-property">
        <h1>Add New Property</h1>

        <h2>Address</h2>
        <AddPropertyAddress
          address={this.props.address}
          manuallyEditingAddress={this.props.manuallyEditingAddress}
          changePropertyField={this.props.changePropertyField}
          manuallyEditAddress={this.props.manuallyEditAddress} />

        <h2>Details</h2>
        <div></div>

        <h2>Client</h2>
        <div></div>

        <h2>Save</h2>
        <div>
          <button>Go!</button>
        </div>

      </div>
    )
  }
}


@connect(state => state.addProperty)
export default class AddPropertyConnector extends Component {
  render() {
    const { dispatch, ...rest } = this.props
    return (
      <AddProperty {...rest} {...bindActionCreators(AddPropertyActions, dispatch)} />
    )
  }
}
