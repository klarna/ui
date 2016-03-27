/* global describe it */

import Badge from '../components/Badge'
import { equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Badge)

describe('Badge', () => {
  describe('default', () => {
    const badge = render()

    it('renders tag "span"', () => {
      equal('span', badge.type)
    })

    it('has className "cui__label"', () => {
      equal('cui__label', badge.props.className)
    })
  })

  it('allows passing custom "className" without overriding defaults', () => {
    const badge = render({ className: 'custom' })

    equal('cui__label custom', badge.props.className)
  })

  it('allows more props', () => {
    const badge = render({ href: 'http://test.com', onClick: () => {} })

    equal('http://test.com', badge.props.href)
    equal('function', typeof badge.props.onClick)
  })
})
