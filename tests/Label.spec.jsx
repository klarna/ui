/* global describe it */

import { Label } from '../components/Text'
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
})
