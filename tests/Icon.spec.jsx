/* global describe it */

import React from 'react'
import Icon from '../components/Icon'
import { equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Icon)

describe('Icon', () => {
  describe('default', () => {
    const icon = render()

    it("renders tag 'svg'", () => {
      equal(icon.type, 'svg')
    })

    it('defaults dimensions to 20px', () => {
      equal('20px', icon.props.width)
      equal('20px', icon.props.height)
    })

    it("allows passing custom 'className'", () => {
      const icon = render({ className: 'custom' })

      equal('custom', icon.props.className)
    })

    it('sets dimensions based on size', () => {
      const icon = render({ size: '100%' })

      equal('100%', icon.props.width)
      equal('100%', icon.props.height)
    })

    it('injects common props into children', () => {
      const child = render({ children: <div></div> }).props.children[0]

      equal('5', child.props.strokeWidth)
      equal('transparent', child.props.fill)
      equal('#a9a9a9', child.props.stroke)
    })
  })

  describe('states', () => {
    it('disabled', () => {
      const stroke = render({ state: 'disabled', children: <div></div> }).props.children[0].props.stroke
      equal('#cbcbcd', stroke)
    })

    it('error', () => {
      const stroke = render({ state: 'error', children: <div></div> }).props.children[0].props.stroke
      equal('#e63200', stroke)
    })

    it('focused', () => {
      const stroke = render({ state: 'focused', children: <div></div> }).props.children[0].props.stroke
      equal('#0074c8', stroke)
    })

    it('warning', () => {
      const stroke = render({ state: 'warning', children: <div></div> }).props.children[0].props.stroke
      equal('#e0a644', stroke)
    })
  })
})
