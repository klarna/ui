/* global describe it */

import Button from '../components/Button'
import { ok, equal, deepEqual } from 'assert'
import { renderer } from './helpers'

const render = renderer(Button)

describe('Button', () => {
  describe('default', () => {
    const button = render()

    it("renders tag 'button'", () => {
      equal(button.type, 'button')
    })

    it("has className 'cui__button--primary'", () => {
      equal(button.props.className, 'cui__button--primary')
    })

    it('is not disabled', () => {
      ok(!button.props.disabled)
    })
  })

  describe('secondary', () => {
    const button = render({ design: 'secondary' })

    it("has className 'cui__button--secondary'", () => {
      equal(
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
        equal('div', child.type)
      })

      it("by default has className 'cui__button--primary__loader'", () => {
        equal('cui__button--primary__loader', child.props.className)
      })

      it("when secondary has className 'cui__button--secondary__loader'", () => {
        const secondary = render({ design: 'secondary', loading: true })

        equal('cui__button--secondary__loader', secondary.props.children.props.className)
      })
    })

    it('is disabled', () => {
      ok(button.props.disabled)
    })
  })

  describe('success', () => {
    const button = render({ success: true })

    it('contains ✔', () => {
      equal(button.props.children, '✔')
    })

    it('is disabled', () => {
      ok(button.props.disabled)
    })
  })

  describe('size', () => {
    it("when 'small' has className 'small'", () => {
      const button = render({ size: 'small' })

      equal('cui__button--primary small', button.props.className)
    })

    it("when 'big' has className 'big'", () => {
      const button = render({ size: 'big' })

      equal('cui__button--primary big', button.props.className)
    })
  })

  describe('custom props', () => {
    it('overrides disabled default', () => {
      ok(render({ disabled: true }).props.disabled)
    })

    it("allows passing custom 'className' without overriding defaults", () => {
      const button = render({ className: 'custom' })

      equal('cui__button--primary custom', button.props.className)
    })

    it('allows passing other props', () => {
      const props = { foo: 'foo', bar: 'bar' }
      const { foo, bar } = render(props).props

      deepEqual(props, { foo, bar })
    })
  })
})
