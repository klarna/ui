/* global describe it */

import { SecondaryTitle } from '../components/Text'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(SecondaryTitle)

describe('SecondaryTitle', () => {
  describe('default', () => {
    const secondaryTitle = render({}, 'LoremIpsum')

    it("renders tag 'h2'", () => {
      equal(secondaryTitle.type, 'h2')
    })

    it("has className 'cui__title--secondary'", () => {
      equal(secondaryTitle.props.className, 'cui__title--secondary')
    })

    it('does not have class blue', () => {
      ok(!secondaryTitle.props.className.match('blue'))
    })

    it('does not have class condensed', () => {
      ok(!secondaryTitle.props.className.match('condensed'))
    })

    it('should have the content', () => {
      ok(secondaryTitle.props.children.match('LoremIpsum'))
    })
  })

  describe('blue', () => {
    const secondaryTitle = render({blue: true}, 'LoremIpsum')

    it('does have class blue', () => {
      ok(secondaryTitle.props.className.match('blue'))
    })
  })

  describe('condensed', () => {
    const secondaryTitle = render({condensed: true}, 'LoremIpsum')

    it('does have class condensed', () => {
      ok(secondaryTitle.props.className.match('condensed'))
    })
  })
})
