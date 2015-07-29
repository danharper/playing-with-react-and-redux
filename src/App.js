import React, { Component, PropTypes } from 'react'
import { provide, connect } from 'react-redux'
import store from './store'
import { InspectionsList } from './Inspections/InspectionsList'
import { PropertiesList } from './Properties/PropertiesList'
import { AddProperty } from './Properties/AddProperty'
import { reduxRouteComponent, transitionTo } from 'redux-react-router'
import { Router, Route, Redirect, Link } from 'react-router'
import { history } from 'react-router/lib/BrowserHistory'

window.__s = () => store.getState()

class Container extends Component {
  render() {
    return (
      <main className="app">
        <nav className="app__nav">
          <ul>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/properties">Properties</Link></li>
            <li><Link to="/inspections">Inspections</Link></li>
          </ul>
        </nav>
        <section className="app__main">
          {this.props.children}
        </section>
      </main>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <p>Hello :)</p>
    )
  }
}

@connect(state => ({}))
class Foo extends Component {
  render() {
    return (
      <div>
        <h1>Properties</h1>
        <button onClick={::this.clicked}>New</button>
        <PropertiesList />
      </div>
    )
  }
  clicked() {
    this.props.dispatch(transitionTo('properties/new'))
  }
}

export default class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Route component={reduxRouteComponent(store)}>
          <Route component={Container}>
            <Redirect from="/" to="/home" />
            <Route path="/home" component={Home} />
            <Route path="/properties" component={Foo} />
            <Route path="/properties/new" component={AddProperty} />
            <Route path="/inspections" component={InspectionsList} />
          </Route>
        </Route>
      </Router>
    )
  }
}
