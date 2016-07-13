import Fieldset from '../components/Fieldset'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Fieldset)

describe('Fieldset', () => {
  describe('default', () => {
    const fieldset = render({}, 'LoremIpsum')

    it("renders tag 'div'", () => {
      equal(fieldset.type, 'div')
    })

    it("has className 'cui__fieldset'", () => {
      equal(fieldset.props.className, 'cui__fieldset')
    })

    it('should have the content', () => {
      ok(fieldset.props.children.match('LoremIpsum'))
    })
  })
})
