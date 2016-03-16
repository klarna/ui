/* global describe it */

import { Paragraph } from '../components/Text'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Paragraph)

describe('Paragraph', () => {
  describe('default', () => {
    const paragraph = render({}, 'LoremIpsum')

    it("renders tag 'p'", () => {
      equal(paragraph.type, 'p')
    })

    it("has className 'cui__paragraph--primary'", () => {
      equal(paragraph.props.className, 'cui__paragraph--primary')
    })

    it('does not have class condensed', () => {
      ok(!paragraph.props.className.match('condensed'))
    })

    it('should have the content', () => {
      ok(paragraph.props.children.match('LoremIpsum'))
    })
  })

  describe('condensed', () => {
    const paragraph = render({condensed: true}, 'LoremIpsum')

    it('does have class condensed', () => {
      ok(paragraph.props.className.match('condensed'))
    })
  })

  describe('design:secondary', () => {
    const paragraph = render({design: 'secondary'}, 'LoremIpsum')

    it("has className 'cui__paragraph--secondary'", () => {
      equal(paragraph.props.className, 'cui__paragraph--secondary')
    })
  })

  describe('design:legal', () => {
    const paragraph = render({design: 'legal'}, 'LoremIpsum')

    it("has className 'cui__paragraph--legal'", () => {
      equal(paragraph.props.className, 'cui__paragraph--legal')
    })
  })
})
