/* global describe it */

import SegmentedControl from '../components/SegmentedControl'
import { ok, equal, deepEqual } from 'assert'
import { renderer } from './helpers'

const render = renderer(SegmentedControl)

describe('SegmentedControl', () => {
  describe('default', () => {
    const segmentedControl = render()

    it("renders tag 'div'", () => {
      equal(segmentedControl.type, 'div')
    })

    it("has className 'cui__segmentedcontrol'", () => {
      equal(segmentedControl.props.className, 'cui__segmentedcontrol')
    })
  })

  describe('static', () => {
    const segmentedControl = render({ design: 'static' })

    it("has className 'cui__segmentedcontrol--secondary'", () => {
      equal(
        segmentedControl.props.className,
        'cui__segmentedcontrol--secondary'
      )
    })
  })

  describe('loading', () => {
    const segmentedControl = render({ loading: true })

    describe('children', () => {
      const child = segmentedControl.props.children

      it("is a 'div'", () => {
        equal('div', child.type)
      })

      it("by default has className 'cui__segmentedcontrol--primary__loader'", () => {
        equal('cui__segmentedcontrol--primary__loader', child.props.className)
      })

      it("when secondary has className 'cui__segmentedcontrol--secondary__loader'", () => {
        const secondary = render({ design: 'secondary', loading: true })

        equal('cui__segmentedcontrol--secondary__loader', secondary.props.children.props.className)
      })
    })

    it('is disabled', () => {
      ok(segmentedControl.props.disabled)
    })
  })

  describe('success', () => {
    const segmentedControl = render({ success: true })

    it('contains ✔', () => {
      equal(segmentedControl.props.children, '✔')
    })

    it('is disabled', () => {
      ok(segmentedControl.props.disabled)
    })
  })

  describe('size', () => {
    it("when 'small' has className 'small'", () => {
      const segmentedControl = render({ size: 'small' })

      equal('cui__segmentedcontrol--primary small', segmentedControl.props.className)
    })

    it("when 'big' has className 'big'", () => {
      const segmentedControl = render({ size: 'big' })

      equal('cui__segmentedcontrol--primary big', segmentedControl.props.className)
    })
  })

  describe('custom props', () => {
    it('overrides disabled default', () => {
      ok(render({ disabled: true }).props.disabled)
    })

    it("allows passing custom 'className' without overriding defaults", () => {
      const segmentedControl = render({ className: 'custom' })

      equal('cui__segmentedcontrol--primary custom', segmentedControl.props.className)
    })

    it('allows passing other props', () => {
      const props = { foo: 'foo', bar: 'bar' }
      const { foo, bar } = render(props).props

      deepEqual(props, { foo, bar })
    })
  })
})
