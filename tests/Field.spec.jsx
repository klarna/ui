/* global describe it */

import React from 'react'
import Field from '../components/Field'
import assert, { equal } from 'assert'
import { renderer, shallow } from './helpers'

const render = renderer(Field)

const icon = (field) => field.props.children[0]
const label = (field) => field.props.children[1]
const input = (field) => field.props.children[2]

describe('Field', () => {
  describe('default', () => {
    const field = render({ name: 'test', label: 'Test' })

    it('renders cui__field', () => {
      equal(field.type, 'div')
      equal(field.props.className, 'cui__field')
    })

    it('does not render icon', () => {
      assert(icon(field) === null)
    })

    it('renders a label', () => {
      equal(label(field).type, 'label')
      equal(label(field).props.children, 'Test')
      equal(label(field).props.className, 'cui__field__label')
    })

    it('renders an enabled text input', () => {
      equal(input(field).type, 'input')
      equal(input(field).props.type, 'text')
      equal(input(field).props.value, '')
      equal(input(field).props.name, 'test')
      equal(input(field).props.className, 'cui__field__input')
      assert(input(field).props.disabled === false)
    })
  })

  describe('sizes', () => {
    it("when 'big' has className 'big'", () => {
      const field = render({ size: 'big', name: 'test', label: 'Test' })

      equal(field.props.className, 'cui__field big')
    })
  })

  describe('filled', () => {
    it("when has initial value has className 'is-filled'", () => {
      const field = render({ value: 'something', name: 'filled', label: 'Filled' })

      equal(field.props.className, 'cui__field is-filled')
    })

    it("when changed with value has className 'is-filled'", () => {
      const renderer = shallow(Field, { name: 'focused', label: 'Focused' })
      input(renderer.getRenderOutput()).props.onChange({target: {value: 'something'}})
      equal(renderer.getRenderOutput().props.className, 'cui__field is-filled')
      input(renderer.getRenderOutput()).props.onChange({target: {value: ''}})
      equal(renderer.getRenderOutput().props.className, 'cui__field')
    })
  })

  describe('focused', () => {
    it("has className 'is-focused'", () => {
      const renderer = shallow(Field, { name: 'focused', label: 'Focused' })
      input(renderer.getRenderOutput()).props.onFocus()
      equal(renderer.getRenderOutput().props.className, 'cui__field is-focused')
      input(renderer.getRenderOutput()).props.onBlur()
      equal(renderer.getRenderOutput().props.className, 'cui__field')
    })
  })

  describe('error', () => {
    const field = render({ error: 'Ooops', name: 'filled', label: 'Filled' })

    it("has className 'is-error'", () => {
      equal(field.props.className, 'cui__field is-error')
    })

    it('error is in the label', () => {
      equal(label(field).props.children, 'Ooops')
    })
  })

  describe('warning', () => {
    const field = render({ warning: 'Hey!', name: 'filled', label: 'Filled' })

    it("has className 'is-warning'", () => {
      equal(field.props.className, 'cui__field is-warning')
    })

    it('warning is in the label', () => {
      equal(label(field).props.children, 'Hey!')
    })
  })

  describe('disabled', () => {
    const field = render({ disabled: true, name: 'filled', label: 'Filled' })

    it("has className 'is-disabled'", () => {
      equal(field.props.className, 'cui__field is-disabled')
    })

    it('input is disabled', () => {
      assert(input(field).props.disabled === true)
    })
  })

  describe('icon', () => {
    const field = render({ name: 'filled', label: 'Filled' }, <span />)

    it('has icon', () => {
      equal(icon(field).type, 'span')
    })

    it('icon state is undefined', () => {
      assert(icon(field).props.state === undefined)
    })

    it('adds icon to className', () => {
      equal(field.props.className, 'cui__field--icon')
    })

    it('label adds icon to className', () => {
      equal(label(field).props.className, 'cui__field--icon__label')
    })

    it('input adds icon to className', () => {
      equal(input(field).props.className, 'cui__field--icon__input')
    })

    describe('states', () => {
      it('error', () => {
        const field = render({ error: 'Ooops', name: 'filled', label: 'Filled' }, <span />)

        equal(icon(field).props.color, 'red')
      })

      it('warning', () => {
        const field = render({ warning: 'Hey!', name: 'filled', label: 'Filled' }, <span />)

        equal(icon(field).props.color, 'orange')
      })

      it('disabled', () => {
        const field = render({ disabled: true, name: 'filled', label: 'Filled' }, <span />)

        equal(icon(field).props.color, 'gray')
      })

      it('focused', () => {
        const renderer = shallow(Field, { name: 'focused', label: 'Focused' }, <span />)
        input(renderer.getRenderOutput()).props.onFocus()
        equal(icon(renderer.getRenderOutput()).props.color, 'blue')
        input(renderer.getRenderOutput()).props.onBlur()
        assert(icon(renderer.getRenderOutput()).props.color === undefined)
      })
    })
  })
})
