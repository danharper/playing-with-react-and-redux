import thunk from 'redux-thunk'
import promise from 'redux-promise-middleware'

function log() {
  return next => action => {
    console.debug('ACTION', action)
    next(action)
  }
}

export default [ thunk, promise, log ]
