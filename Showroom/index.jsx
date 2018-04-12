import React from 'react'
import createReactClass from 'create-react-class'
import * as examples from './examples'
import Main from './Main'
import states from './states'

export default createReactClass({
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
