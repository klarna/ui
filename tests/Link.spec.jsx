/* global describe it */

import Link from '../components/Link'
import { equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Link)

describe('Link', () => {
  describe('default', () => {
    const link = render()

    it('renders tag "a"', () => {
      equal('a', link.type)
    })

    it('has className "cui__link"', () => {
      equal('cui__link', link.props.className)
    })
  })

  it('allows passing custom "className" without overriding defaults', () => {
    const link = render({ className: 'custom' })

    equal('cui__link custom', link.props.className)
  })

  describe('customize', () => {
    const link = render({ customize: { textColor: 'green' } })

    it('has className "dynamic-styling"', () => {
      equal('cui__link dynamic-styling', link.props.className)
    })

    it('has the correct customized styles', () => {
      equal(link.props.style.color, 'green')
    })
  })

  it('allows more props', () => {
    const link = render({ href: 'http://test.com', onClick: () => {} })

    equal('http://test.com', link.props.href)
    equal('function', typeof link.props.onClick)
  })
})
