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

class AddProperty extends Component {
  static propTypes = {
    fields: PropTypes.object.isRequired,
    editingAddress: PropTypes.bool.isRequired,
    changePropertyField: PropTypes.func.isRequired,
    manuallyEditAddress: PropTypes.func.isRequired,
  }

  render() {
    const { editingAddress } = this.props

    return (
      <div className="add-property">
        <h1>Add Property</h1>
        <PostcodeAnywhereSearch onChange={::this.changeFields} className="add-property__search" />

        <button className="button--text" onClick={::this.toggleAddressEditing}>Enter Address Manually</button>

        <div className="flip-box">
          {editingAddress ? this.renderEditAddress() : this.renderViewAddress()}
        </div>

        <button>Go!</button>
      </div>
    )
  }

  renderEditAddress() {
    const { fields, changePropertyField } = this.props
    return (
      <InputFields data={fields} fields={addressFields} onChange={changePropertyField} />
    )
  }

  renderViewAddress() {
    let fields = filledFields(this.props.fields)
    return (
      <address>
        {fields.map(([field, value]) => <p key={field}>{value}</p>)}
      </address>
    )
  }

  toggleAddressEditing() {
    this.props.manuallyEditAddress( ! this.props.editingAddress)
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



@connect(state => state.addProperty)
export default class AddPropertyConnector extends Component {
  render() {
    const { dispatch, ...rest } = this.props
    return (
      <AddProperty {...rest} {...bindActionCreators(AddPropertyActions, dispatch)} />
    )
  }
}
