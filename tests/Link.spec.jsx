/* global describe it */

import Link from '../components/Link'
import { equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Link)

describe('Link', () => {
  describe('default', () => {
    const loader = render()

    it("renders tag 'a'", () => {
      equal('a', loader.type)
    })

    it("has className 'cui__link'", () => {
      equal('cui__link', loader.props.className)
    })
  })

  it("allows passing custom 'className' without overriding defaults", () => {
    const loader = render({ className: 'custom' })

    equal('cui__link custom', loader.props.className)
  })
})
