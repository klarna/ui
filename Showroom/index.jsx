import React from 'react'
import * as examples from './examples'
import * as templates from './templates'
import Grid from './Grid'
import Page from './Page'
import Sidebar from './Sidebar'
import GettingStarted from './Page/GettingStarted'
import Main from './Main'
import states from './states'

export default React.createClass({
  getInitialState () {
    return states()
  },

  componentDidMount () {
    states.map(this.setState.bind(this))
  },

  render () {
    return <Main examples={examples.concat(templates)} {...this.state} />
  }
})
