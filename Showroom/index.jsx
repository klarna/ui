import React, {Component} from 'react'
import * as examples from './examples'
import Main from './Main'
import states from './states'

export default class Showroom extends Component {
  constructor () {
    super()

    this.state = {
      store: states()
    }
  }

  componentDidMount () {
    states.map(state => this.setState({store: state}))
  }

  shouldComponentUpdate (nextProps, nextState) {
    return nextState.store !== this.state.store
  }

  render () {
    return (
      <Main
        examples={examples}
        {...this.state.store}
      />
    )
  }
}
