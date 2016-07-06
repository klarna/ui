import PrimaryTitle from '../components/texts/PrimaryTitle'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import describePalette from './describePalette'

const render = renderer(PrimaryTitle)

describe('PrimaryTitle', () => {
  describe('default', () => {
    const primaryTitle = render({}, 'LoremIpsum')

    it("renders tag 'h1'", () => {
      equal(primaryTitle.type, 'h1')
    })

    it("has className 'cui__title--primary'", () => {
      ok(primaryTitle.props.className.match('cui__title--primary'))
    })

    it('should have the content', () => {
      ok(primaryTitle.props.children.match('LoremIpsum'))
    })
  })

  describePalette(render)

  describe('small', () => {
    const primaryTitle = render({small: true}, 'LoremIpsum')

    it('does have class small', () => {
      ok(primaryTitle.props.className.match('small'))
    })
  })

  describe('strong', () => {
    const primaryTitle = render({strong: true}, 'LoremIpsum')

    it('does have class strong', () => {
      ok(primaryTitle.props.className.match('strong'))
    })
  })

  describe('margins', () => {
    const primaryTitle = render({margins: true}, 'LoremIpsum')

    it("has class 'default-margins'", () => {
      ok(primaryTitle.props.className.match('default-margins'))
    })
  })
})
