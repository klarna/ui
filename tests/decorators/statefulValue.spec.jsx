/* global describe it */

import React, { Component } from 'react'
import statefulValue from '../../lib/decorators/statefulValue'
import { shallow } from '../helpers'
import { equal } from 'assert'

class TestComponent extends Component {
  render () {
    return (
      <input
        onChange={this.props.onChange}
        value={this.props.value}
      />
    )
  }
}

describe('statefulValue', () => {
  const DecoratedComponent = statefulValue(TestComponent)

  describe('onChange', () => {
    it('update the value of the inner component', () => {
      const decorated = shallow(
        DecoratedComponent,
        { onChange: () => { } }
      )

      decorated.getRenderOutput().props.onChange({ target: { value: 'foo' } })

      equal(decorated.getRenderOutput().props.value, 'foo')
    })

    it('update the state value', () => {
      const decorated = shallow(
        DecoratedComponent,
        { onChange: () => { } }
      )

      decorated.getRenderOutput().props.onChange({ target: { value: 'foo' } })

      equal(decorated.getMountedInstance().state.value, 'foo')
    })
  })
})
