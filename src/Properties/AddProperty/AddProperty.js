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
        {fields.map(config =>
          <label key={config.field}><span>{config.label}</span>{this.renderFieldType(config, data)}</label>
        )}
      </div>
    )
  }

  renderFieldType(config, data) {
    const { type, field } = config
    if ( ! type || type === 'text') {
      return <input name={field} value={data[field]} onChange={::this.changeField(field)} />
    }
    if (type === 'select') {
      return <select name={field} value={data[field]} onChange={::this.changeField(field)}>
        {config.options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
      </select>
    }
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
    changeAddressField: PropTypes.func.isRequired,
    manuallyEditAddress: PropTypes.func.isRequired,
  }

  render() {
    return this.props.manuallyEditingAddress ? this.renderEditAddress() : this.renderViewAddress()
  }

  renderEditAddress() {
    const { address, changeAddressField } = this.props
    return (
      <div className="address-box">
        <InputFields data={address} fields={addressFields} onChange={changeAddressField} />
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
    Object.keys(fields).forEach(field => this.props.changeAddressField(field, fields[field]))
  }

}

function filledFields(fields) {
  return Object.keys(fields)
    .map(field => [field, fields[field]])
    .filter(([field, value]) => value)
}

class AddPropertyDetails extends Component {
  static propTypes = {
    details: PropTypes.object.isRequired,
    changeDetailsField: PropTypes.func.isRequired,
  }
  render() {
    return (
      <div>
        <InputFields
          fields={[
            { field: 'type', label: 'Type', type: 'select', options: [
              null,
              'Apartment',
          		'Bedsit',
          		'Bungalow',
          		'Cottage',
          		'House',
          		'Maisonette',
          		'Mansion',
          		'Flat - Purpose build',
          		'Flat - Converted',
          		'Studio Apartment',
          		'Tenement',
          		'Townhouse',
          		'Other',
          		'Commercial',
          		'Condominium',
          		'Duplex',
            ] },
            { field: 'detachment', label: 'Detachment', type: 'select', options: [
              null,
              'Detached',
          		'Semi-Detached',
          		'Mid Terrace',
          		'End Terrace',
            ] },
            { field: 'furnishing', label: 'Furnishing', type: 'select', options: [
              null,
              'Unfurnished',
          		'Part Furnished',
          		'Fully Furnished',
            ] },
          ]}
          data={this.props.details}
          onChange={this.props.changeDetailsField} />
      </div>
    )
  }
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
          changeAddressField={this.props.changeAddressField}
          manuallyEditAddress={this.props.manuallyEditAddress} />

        <h2>Details</h2>
        <AddPropertyDetails
          details={this.props.details}
          changeDetailsField={this.props.changeDetailsField} />

        <h2>Client</h2>
        <div></div>

        <h2>Misc</h2>
        <div>
          reference, notes, health etc.
        </div>

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
