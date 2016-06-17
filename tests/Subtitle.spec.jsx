/* global describe it */

import Subtitle from '../components/texts/Subtitle'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import describePalette from './describePalette'

const render = renderer(Subtitle)

describe('Subtitle', () => {
  describe('default', () => {
    const subtitle = render({}, 'LoremIpsum')

    it("renders tag 'h3'", () => {
      equal(subtitle.type, 'h3')
    })

    it("has className 'cui__subtitle'", () => {
      ok(subtitle.props.className.match('cui__subtitle'))
    })

    it('should have the content', () => {
      ok(subtitle.props.children.match('LoremIpsum'))
    })
  })

  describePalette(render)

  describe('condensed', () => {
    const subtitle = render({condensed: true}, 'LoremIpsum')

    it('does have class condensed', () => {
      ok(subtitle.props.className.match('condensed'))
    })
  })

  describe('margins', () => {
    const subtitle = render({margins: true}, 'LoremIpsum')

    it("has class 'default-margins'", () => {
      ok(subtitle.props.className.match('default-margins'))
    })
  })
})
