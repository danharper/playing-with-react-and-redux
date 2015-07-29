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
    const { fields, changePropertyField, editingAddress } = this.props

    return (
      <div className="add-property">
        <p>Hello!</p>
        <PostcodeAnywhereSearch onChange={::this.changeFields} className="add-property__search" />
        <div className="flip-box">
          <button onClick={::this.toggleAddressEditing}>Edit Manually</button>

          <div className={classnames('flip-box__piece', { gone: ! editingAddress })}>
            <InputFields data={fields} fields={addressFields} onChange={changePropertyField} />
          </div>

          <div className={classnames('flip-box__piece', { gone: editingAddress })}>
            {this.renderAddress()}
          </div>

        </div>
        <button>Go!</button>
      </div>
    )
  }
  renderAddress() {
    let fields = this.getFilledAddressFields()
    return (
      <address>
        {fields.map(([field, value]) => <p key={field}>{value}</p>)}
      </address>
    )
  }
  getFilledAddressFields() {
    return Object.keys(this.props.fields)
      .map(field => [field, this.props.fields[field]])
      .filter(([field, value]) => value)
  }
  toggleAddressEditing() {
    this.props.manuallyEditAddress( ! this.props.editingAddress)
  }
  changeFields(fields) {
    Object.keys(fields).forEach(field => this.props.changePropertyField(field, fields[field]))
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
