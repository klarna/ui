import React, {Component} from 'react'
import Toolbar from './Toolbar'

import grid from '../../settings/grid'

export default options => Example => class Lekplats extends Component {
  constructor () {
    super()

    this.state = options
      .reduce((state, {name, value}) => ({
        ...state,
        [name]: value
      }), {})
  }

  render () {
    return <section
      style={{
        display: 'flex',
        marginTop: grid(12),
        width: '100%'
      }}>
      <Example {...this.state} />
      <Toolbar
        checkmarks={options}
        values={this.state}
        onChange={values => this.setState(values)}
      />
    </section>
  }
}
