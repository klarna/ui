import Paragraph from '../components/texts/Paragraph'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import describePalette from './describePalette'

const render = renderer(Paragraph)

describe('Paragraph', () => {
  describe('default', () => {
    const paragraph = render({}, 'LoremIpsum')

    it("renders tag 'p'", () => {
      equal(paragraph.type, 'p')
    })

    it("has className 'cui__paragraph--primary'", () => {
      ok(paragraph.props.className.match('cui__paragraph--primary'))
    })

    it('should have the content', () => {
      ok(paragraph.props.children.match('LoremIpsum'))
    })
  })

  describePalette(render)

  describe('condensed', () => {
    const paragraph = render({condensed: true}, 'LoremIpsum')

    it('does have class condensed', () => {
      ok(paragraph.props.className.match('condensed'))
    })
  })

  describe('margins', () => {
    const paragraph = render({margins: true}, 'LoremIpsum')

    it("has class 'default-margins'", () => {
      ok(paragraph.props.className.match('default-margins'))
    })
  })

  describe('design:secondary', () => {
    const paragraph = render({design: 'secondary'}, 'LoremIpsum')

    it("has className 'cui__paragraph--secondary'", () => {
      ok(paragraph.props.className.match('cui__paragraph--secondary'))
    })
  })

  describe('design:legal', () => {
    const paragraph = render({design: 'legal'}, 'LoremIpsum')

    it("has className 'cui__paragraph--legal'", () => {
      ok(paragraph.props.className.match('cui__paragraph--legal'))
    })
  })
})
