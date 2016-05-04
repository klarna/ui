/* global describe it */

import React, { Component } from 'react'
import statefulFocus from '../../lib/decorators/statefulFocus'
import { shallow } from '../helpers'
import { equal } from 'assert'

class TestComponent extends Component {
  render () {
    return (
      <input
        onBlur={this.props.onBlur}
        onFocus={this.props.onFocus}
        focus={this.props.focus}
      />
    )
  }
}

describe('statefulFocus', () => {
  const DecoratedComponent = statefulFocus(TestComponent)

  describe('onBlur', () => {
    it('set focus to false in the inner component', () => {
      const decorated = shallow(
        DecoratedComponent,
        { onBlur: () => {}, onFocus: () => {} }
      )

      decorated.getRenderOutput().props.onBlur({ target: { value: 'foo' } })

      equal(decorated.getRenderOutput().props.focus, undefined)
    })

    it('update the state focus value', () => {
      const decorated = shallow(
        DecoratedComponent,
        { onBlur: () => {}, onFocus: () => {} }
      )

      decorated.getRenderOutput().props.onBlur({ target: { value: 'foo' } })

      equal(decorated.getMountedInstance().state.focus, undefined)
    })
  })

  describe('onFocus', () => {
    it('set focus to true in the inner component', () => {
      const decorated = shallow(
        DecoratedComponent,
        { onBlur: () => {}, onFocus: () => {} }
      )

      decorated.getRenderOutput().props.onFocus({ target: { value: 'foo' } })

      equal(decorated.getRenderOutput().props.focus, true)
    })

    it('update the state focus value', () => {
      const decorated = shallow(
        DecoratedComponent,
        { onBlur: () => {}, onFocus: () => {} }
      )

      decorated.getRenderOutput().props.onFocus({ target: { value: 'foo' } })

      equal(decorated.getMountedInstance().state.focus, true)
    })
  })
})
