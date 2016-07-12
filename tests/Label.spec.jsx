import Label from '../components/Label'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Label)

describe('Label', () => {
  describe('default', () => {
    const label = render({}, 'LoremIpsum')

    it("renders tag 'span'", () => {
      equal(label.type, 'span')
    })

    it("has className 'cui__label'", () => {
      equal(label.props.className, 'cui__label')
    })

    it('should have the content', () => {
      ok(label.props.children.match('LoremIpsum'))
    })
  })

  describe('designs', () => {
    Label.designs.map((design) => {
      const label = render({ design }, 'LoremIpsum')

      it(`has className "${design}" when design is set`, () => {
        ok(label.props.className.match(design))
      })
    })
  })

  describe('outline', () => {
    const label = render({ outline: true }, 'LoremIpsum')

    it('has className "outline"', () => {
      ok(label.props.className.match('outline'))
    })
  })

  describe('inverted', () => {
    const label = render({ inverted: true }, 'LoremIpsum')

    it('has className "inverted"', () => {
      ok(label.props.className.match('inverted'))
    })
  })
})
