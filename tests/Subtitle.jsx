/* global describe it */

import { Subtitle } from '../components/Text'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Subtitle)

describe('Subtitle', () => {
  describe('default', () => {
    const subtitle = render({}, 'LoremIpsum')

    it("renders tag 'h3'", () => {
      equal(subtitle.type, 'h3')
    })

    it("has className 'cui__subtitle'", () => {
      equal(subtitle.props.className, 'cui__subtitle')
    })

    it('does not have class blue', () => {
      ok(!subtitle.props.className.match('blue'))
    })

    it('does not have class condensed', () => {
      ok(!subtitle.props.className.match('condensed'))
    })

    it('should have the content', () => {
      ok(subtitle.props.children.match('LoremIpsum'))
    })
  })

  describe('blue', () => {
    const subtitle = render({blue: true}, 'LoremIpsum')

    it('does have class blue', () => {
      ok(subtitle.props.className.match('blue'))
    })
  })

  describe('condensed', () => {
    const subtitle = render({condensed: true}, 'LoremIpsum')

    it('does have class condensed', () => {
      ok(subtitle.props.className.match('condensed'))
    })
  })
})
