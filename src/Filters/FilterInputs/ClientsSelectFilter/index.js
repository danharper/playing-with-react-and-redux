import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import * as ClientSelectActions from './actions'
import FetchingSelectFilter from '../FetchingSelectFilter'

@connect(state => ({
  clients: state.clientsSelect
}))
export default class ClientsSelectFilter extends Component {
  static propTypes = {
    onChange: PropTypes.func.isRequired,
    field: PropTypes.string,
    title: PropTypes.string,
    value: PropTypes.any,
  }
  static defaultProps = {
    field: 'client_id',
    title: 'Client',
  }
  render() {
    const { clients, title, value } = this.props
    return (
      <FetchingSelectFilter
        title={title}
        loading={clients.loading}
        error={clients.error}
        list={clients.data}
        fetch={::this.loadClients}
        onChange={::this.filterChanged}
        value={value}
      >
        {::this.renderClientItem}
      </FetchingSelectFilter>
    )
  }
  loadClients(...args) {
    this.props.dispatch(ClientSelectActions.loadClients(...args))
  }
  renderClientItem(client) {
    return <option key={client.id} value={client.id}>{client.name}</option>
  }
  filterChanged(clientId) {
    clientId = clientId ? parseInt(clientId, 10) : null
    this.props.onChange(this.props.field, clientId)
  }
}
