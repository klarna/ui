/* global describe it */

import Loader from '../components/Loader'
import { equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Loader)

describe('Loader', () => {
  describe('default', () => {
    const loader = render()

    it("renders tag 'div'", () => {
      equal('div', loader.type)
    })

    it("has className 'cui__loader'", () => {
      equal('cui__loader', loader.props.className)
    })
  })

  describe('color', () => {
    it("when 'blue' has className 'blue'", () => {
      const loader = render({ color: 'blue' })

      equal('cui__loader blue', loader.props.className)
    })
  })

  describe('size', () => {
    it("when 'big' has className 'big'", () => {
      const loader = render({ size: 'big' })

      equal('cui__loader big', loader.props.className)
    })

    it("when 'small' has className 'small'", () => {
      const loader = render({ size: 'small' })

      equal('cui__loader small', loader.props.className)
    })

    it("when 'tiny' has className 'tiny'", () => {
      const loader = render({ size: 'tiny' })

      equal('cui__loader tiny', loader.props.className)
    })
  })
})
