/* global describe it */

import { PrimaryTitle } from '../components/Text'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(PrimaryTitle)

describe('PrimaryTitle', () => {
  describe('default', () => {
    const primaryTitle = render({}, 'LoremIpsum')

    it("renders tag 'h1'", () => {
      equal(primaryTitle.type, 'h1')
    })

    it("has className 'cui__title--primary'", () => {
      equal(primaryTitle.props.className, 'cui__title--primary')
    })

    it('does not have class blue', () => {
      ok(!primaryTitle.props.className.match('blue'))
    })

    it('does not have class strong', () => {
      ok(!primaryTitle.props.className.match('strong'))
    })

    it('does not have class small', () => {
      ok(!primaryTitle.props.className.match('small'))
    })

    it('should have the content', () => {
      ok(primaryTitle.props.children.match('LoremIpsum'))
    })
  })

  describe('blue', () => {
    const primaryTitle = render({blue: true}, 'LoremIpsum')

    it('does have class blue', () => {
      ok(primaryTitle.props.className.match('blue'))
    })
  })

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
})
