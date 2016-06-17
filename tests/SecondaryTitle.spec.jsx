/* global describe it */

import SecondaryTitle from '../components/texts/SecondaryTitle'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import describePalette from './describePalette'

const render = renderer(SecondaryTitle)

describe('SecondaryTitle', () => {
  describe('default', () => {
    const secondaryTitle = render({}, 'LoremIpsum')

    it("renders tag 'h2'", () => {
      equal(secondaryTitle.type, 'h2')
    })

    it("has className 'cui__title--secondary'", () => {
      ok(secondaryTitle.props.className.match('cui__title--secondary'))
    })

    it('should have the content', () => {
      ok(secondaryTitle.props.children.match('LoremIpsum'))
    })
  })

  describePalette(render)

  describe('condensed', () => {
    const secondaryTitle = render({condensed: true}, 'LoremIpsum')

    it('does have class condensed', () => {
      ok(secondaryTitle.props.className.match('condensed'))
    })
  })

  describe('margins', () => {
    const secondaryTitle = render({margins: true}, 'LoremIpsum')

    it("has class 'default-margins'", () => {
      ok(secondaryTitle.props.className.match('default-margins'))
    })
  })
})
