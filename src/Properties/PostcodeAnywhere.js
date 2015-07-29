import React from 'react'
import { ReactScriptLoaderMixin } from 'react-script-loader'

const PCA_KEY = 'mw78-cy15-cj55-fy98'
const PCA_JS  = 'http://services.postcodeanywhere.co.uk/js/captureplus-2.30.min.js?key=' + PCA_KEY
const PCA_CSS = 'http://services.postcodeanywhere.co.uk/css/captureplus-2.30.min.css?key=' + PCA_KEY

const PostcodeAnywhere = React.createClass({
  mixins: [ReactScriptLoaderMixin],
  getInitialState: () => ({
    pcaLoading: true,
    pcaLoadError: false,
  }),
  getScriptURL: () => PCA_JS,
  onScriptLoaded() {
    this.setState({ pcaLoading: false })
  },
  onScriptError() {
    this.setState({ pacLoading: false, pcaLoadError: true })
  },
  render() {
    let message
    if (this.state.pcaLoading) message = 'Loading...'
    if (this.state.pcaLoadError) message = 'Error Loading Postcode Lookup'

    return (
      <div>
        <link rel="stylesheet" type="text/css" href={PCA_CSS} />
        {message && <p>{message}</p>}
      </div>
    )
  }
})

export default PostcodeAnywhere
