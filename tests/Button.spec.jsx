/* global describe it */

import React from 'react'
import Button from '../components/Button'
import assert from 'assert'
import { createRenderer } from 'react-addons-test-utils'

const shallow = createRenderer()
const render = (props = {}) => {
  shallow.render(<Button {...props} />)
  return shallow.getRenderOutput()
}

describe('Button', () => {
  describe('default', () => {
    const button = render()

    it("renders tag 'button'", () => {
      assert.equal(button.type, 'button')
    })

    it("has className 'cui__button--primary'", () => {
      assert.equal(button.props.className, 'cui__button--primary')
    })

    it('is not disabled', () => {
      assert(!button.props.disabled)
    })
  })

  describe('secondary', () => {
    const button = render({ design: 'secondary' })

    it("has className 'cui__button--secondary'", () => {
      assert.equal(
        button.props.className,
        'cui__button--secondary'
      )
    })
  })

  describe('loading', () => {
    const button = render({ loading: true })

    describe('children', () => {
      const child = button.props.children

      it("is a 'div'", () => {
        assert.equal(child.type, 'div')
      })

      it("by default has className 'cui__button--primary__loader'", () => {
        assert.equal(
          child.props.className,
          'cui__button--primary__loader'
        )
      })

      it("when secondary has className 'cui__button--secondary__loader'", () => {
        const secondary = render({ design: 'secondary', loading: true })
        assert.equal(secondary.props.children.props.className, 'cui__button--secondary__loader')
      })
    })

    it('is disabled', () => {
      assert(button.props.disabled)
    })
  })

  describe('success', () => {
    const button = render({ success: true })

    it('contains ✔', () => {
      assert.equal(button.props.children, '✔')
    })

    it('is disabled', () => {
      assert(button.props.disabled)
    })
  })

  describe('size', () => {
    it("when 'small' has className 'small'", () => {
      assert(render({ size: 'small' }).props.className.match(/small/))
    })

    it("when 'big' has className 'big'", () => {
      assert(render({ size: 'big' }).props.className.match(/big/))
    })
  })

  describe('custom props', () => {
    it('overrides disabled default', () => {
      assert(render({ disabled: true }).props.disabled)
    })

    it("allows passing custom 'className' without overriding defaults", () => {
      assert.equal(
        render({ className: 'custom' }).props.className,
        'custom cui__button--primary'
      )
    })

    it('allows passing other props', () => {
      const props = { foo: 'foo', bar: 'bar' }
      const { foo, bar } = render(props).props
      assert.deepEqual(props, { foo, bar })
    })
  })
})
