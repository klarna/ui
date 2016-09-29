import React from 'react'
import * as examples from './examples'
import Main from './Main'
import states from './states'

export default React.createClass({
  getInitialState () {
    return states()
  },

  componentDidMount () {
    states.map(this.replaceState.bind(this))
  },

  shouldComponentUpdate (nextProps, nextState) {
    return nextState !== this.state
  },

  render () {
    return (
      <Main
        examples={examples}
        {...this.state}
      />
    )
  }
})
