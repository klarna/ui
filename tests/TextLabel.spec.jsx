import TextLabel from '../components/texts/TextLabel'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(TextLabel)

describe('TextLabel', () => {
  describe('default', () => {
    const textLabel = render({}, 'LoremIpsum')

    it("renders tag 'h4'", () => {
      equal(textLabel.type, 'h4')
    })

    it("has className 'cui__text-label'", () => {
      equal(textLabel.props.className, 'cui__text-label')
    })

    it('should have the content', () => {
      ok(textLabel.props.children.match('LoremIpsum'))
    })
  })

  describe('margins', () => {
    const textLabel = render({margins: true}, 'LoremIpsum')

    it("has class 'default-margins'", () => {
      ok(textLabel.props.className.match('default-margins'))
    })
  })
})
