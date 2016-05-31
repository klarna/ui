/* global describe it */

import Dropdown from '../components/Dropdown'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import { spy } from 'sinon'

const render = renderer(Dropdown)
const data = [
  {id: 1, label: 'option1'},
  {id: 2, label: 'option2'}
]

const problem = (dropdown) => dropdown.props.children[0]
const label = (dropdown) => dropdown.props.children[1]
const selected = (dropdown) => dropdown.props.children[2]
const select = (dropdown) => dropdown.props.children[3]

describe('Dropdown', () => {
  describe('default', () => {
    const onChange = spy()
    const dropdown = render({ data, onChange, label: 'Label' })

    it("renders tag 'div'", () => {
      equal(dropdown.type, 'div')
    })

    it("has className 'cui__dropdown--native'", () => {
      equal(dropdown.props.className, 'cui__dropdown--native')
    })

    it('displays label', () => {
      equal(label(dropdown).props.className, 'cui__dropdown--native__label')
      equal(label(dropdown).props.children, 'Label')
    })

    it('displays select', () => {
      equal(select(dropdown).props.className, 'cui__dropdown--native__select')
    })

    it('has no option selected', () => {
      ok(!selected(dropdown))
      ok(!select(dropdown).props.defaultValue)
    })

    it('has no problem', () => {
      ok(!problem(dropdown))
    })

    it('calls onChange callback when options are selected', () => {
      select(dropdown).props.onChange({target: {value: 1}})
      ok(onChange.calledWith(1))
      select(dropdown).props.onChange({target: {value: 2}})
      ok(onChange.calledWith(2))
    })
  })

  describe('error', () => {
    const dropdown = render({ error: 'Wooops', data, label: 'Label' })

    it("has className 'is-error'", () => {
      ok(dropdown.props.className.match('is-error'))
    })

    it('renders error', () => {
      equal(problem(dropdown).props.className, 'cui__dropdown--native__floating-label')
      equal(problem(dropdown).props.children, 'Wooops')
    })
  })

  describe('warning', () => {
    const dropdown = render({ warning: 'Heeey', data, label: 'Label' })

    it("has className 'is-warning'", () => {
      ok(dropdown.props.className.match('is-warning'))
    })

    it('renders warning', () => {
      equal(problem(dropdown).props.className, 'cui__dropdown--native__floating-label')
      equal(problem(dropdown).props.children, 'Heeey')
    })
  })

  describe('selected', () => {
    const dropdown = render({ selected: 1, data, label: 'Label' })

    it("has className 'is-selected'", () => {
      ok(dropdown.props.className.match('is-selected'))
    })

    it('renders selected label', () => {
      equal(selected(dropdown).props.className, 'cui__dropdown--native__current-option')
      equal(selected(dropdown).props.children, 'option1')
    })

    it('has option selected', () => {
      equal(select(dropdown).props.defaultValue, 1)
    })
  })

  describe('loading', () => {
    const dropdown = render({ loading: true, data, label: 'Label' })

    it("has className 'is-loading'", () => {
      ok(dropdown.props.className.match('is-loading'))
    })

    it('has disabled select', () => {
      ok(select(dropdown).props.disabled)
    })
  })

  describe('disabled', () => {
    const dropdown = render({ disabled: true, data, label: 'Label' })

    it("has className 'is-disabled'", () => {
      ok(dropdown.props.className.match('is-disabled'))
    })

    it('has disabled select', () => {
      ok(select(dropdown).props.disabled)
    })
  })

  describe('position', () => {
    const dropdown = render({ position: 'top', data, label: 'Label' })

    it("has className 'top'", () => {
      ok(dropdown.props.className.match('top'))
    })
  })

  describe('size', () => {
    const dropdown = render({ size: 'half', data, label: 'Label' })

    it("has className 'half'", () => {
      ok(dropdown.props.className.match('half'))
    })
  })

  describe('className', () => {
    const dropdown = render({ className: 'custom', data, label: 'Label' })

    it('has custom className', () => {
      equal(dropdown.props.className, 'cui__dropdown--native custom')
    })
  })

  describe('problem & selected', () => {
    const dropdownWithWarning = render({ warning: 'Heeey', selected: 1, data, label: 'Label' })
    const dropdownWithError = render({ error: 'Wooops', selected: 2, data, label: 'Label' })

    it('does not render label', () => {
      ok(!label(dropdownWithError))
      ok(!label(dropdownWithWarning))
    })
  })
})
