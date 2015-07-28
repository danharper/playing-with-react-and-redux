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
    onActive: PropTypes.func.isRequired,
    onInactive: PropTypes.func.isRequired,
    title: PropTypes.string,
    value: PropTypes.any,
  }
  static defaultProps = {
    title: 'Client',
  }
  render() {
    const { clients, title, value, onActive, onInactive } = this.props

    return (
      <FetchingSelectFilter
        title={title}
        loading={clients.loading}
        error={clients.error}
        list={clients.data}
        fetch={::this.loadClients}
        onChange={::this.filterChanged}
        onActive={onActive}
        onInactive={onInactive}
        value={value}
      >
        {client =>
          <option key={client.id} value={client.id}>{client.name}</option>
        }
      </FetchingSelectFilter>
    )
  }
  loadClients(...args) {
    this.props.dispatch(ClientSelectActions.loadClients(...args))
  }
  filterChanged(clientId) {
    this.props.onChange(clientId ? parseInt(clientId, 10) : null)
  }
}
