/* global describe it */

import React from 'react'
import Input from '../components/Input'
import assert, { equal } from 'assert'
import { renderer, shallow } from './helpers'

const render = renderer(Input)

const icon = (input) => input.props.children[0]
const label = (input) => input.props.children[1]
const _input = (input) => input.props.children[2]

describe('Input', () => {
  describe('default', () => {
    const input = render({ name: 'test', label: 'Test' })

    it('renders cui__input', () => {
      equal(input.type, 'div')
      equal(input.props.className, 'cui__input')
    })

    it('does not render icon', () => {
      assert(icon(input) === null)
    })

    it('renders a label', () => {
      equal(label(input).type, 'label')
      equal(label(input).props.children, 'Test')
      equal(label(input).props.className, 'cui__input__label')
    })

    it('renders an enabled text input', () => {
      equal(_input(input).type, 'input')
      equal(_input(input).props.type, 'text')
      equal(_input(input).props.value, '')
      equal(_input(input).props.name, 'test')
      equal(_input(input).props.className, 'cui__input__input')
      assert(_input(input).props.disabled === false)
    })
  })

  describe('sizes', () => {
    it("when 'big' has className 'big'", () => {
      const input = render({ size: 'big', name: 'test', label: 'Test' })

      equal(input.props.className, 'cui__input big')
    })

    it("when 'giant' has className 'giant'", () => {
      const input = render({ size: 'giant', name: 'test', label: 'Test' })

      equal(input.props.className, 'cui__input giant')
    })
  })

  describe('filled', () => {
    it("when has initial value has className 'is-filled'", () => {
      const input = render({ value: 'something', name: 'filled', label: 'Filled' })

      equal(input.props.className, 'cui__input is-filled')
    })

    it("when changed with value has className 'is-filled'", () => {
      const renderer = shallow(Input, { name: 'focused', label: 'Focused' })
      _input(renderer.getRenderOutput()).props.onChange({target: {value: 'something'}})
      equal(renderer.getRenderOutput().props.className, 'cui__input is-filled')
      _input(renderer.getRenderOutput()).props.onChange({target: {value: ''}})
      equal(renderer.getRenderOutput().props.className, 'cui__input')
    })
  })

  describe('focused', () => {
    it("has className 'is-focused'", () => {
      const renderer = shallow(Input, { name: 'focused', label: 'Focused' })
      _input(renderer.getRenderOutput()).props.onFocus()
      equal(renderer.getRenderOutput().props.className, 'cui__input is-focused')
      _input(renderer.getRenderOutput()).props.onBlur()
      equal(renderer.getRenderOutput().props.className, 'cui__input')
    })
  })

  describe('error', () => {
    const input = render({ error: 'Ooops', name: 'filled', label: 'Filled' })

    it("has className 'is-error'", () => {
      equal(input.props.className, 'cui__input is-error')
    })

    it('error is in the label', () => {
      equal(label(input).props.children, 'Ooops')
    })
  })

  describe('warning', () => {
    const input = render({ warning: 'Hey!', name: 'filled', label: 'Filled' })

    it("has className 'is-warning'", () => {
      equal(input.props.className, 'cui__input is-warning')
    })

    it('warning is in the label', () => {
      equal(label(input).props.children, 'Hey!')
    })
  })

  describe('disabled', () => {
    const input = render({ disabled: true, name: 'filled', label: 'Filled' })

    it("has className 'is-disabled'", () => {
      equal(input.props.className, 'cui__input is-disabled')
    })

    it('input is disabled', () => {
      assert(_input(input).props.disabled === true)
    })
  })

  describe('icon', () => {
    const input = render({ name: 'filled', label: 'Filled' }, <span />)

    it('has icon', () => {
      equal(icon(input).type, 'span')
    })

    it('icon state is undefined', () => {
      assert(icon(input).props.state === undefined)
    })

    it('adds icon to className', () => {
      equal(input.props.className, 'cui__input--icon')
    })

    it('label adds icon to className', () => {
      equal(label(input).props.className, 'cui__input--icon__label')
    })

    it('input adds icon to className', () => {
      equal(_input(input).props.className, 'cui__input--icon__input')
    })

    describe('states', () => {
      it('error', () => {
        const input = render({ error: 'Ooops', name: 'filled', label: 'Filled' }, <span />)

        equal(icon(input).props.color, 'red')
      })

      it('warning', () => {
        const input = render({ warning: 'Hey!', name: 'filled', label: 'Filled' }, <span />)

        equal(icon(input).props.color, 'orange')
      })

      it('disabled', () => {
        const input = render({ disabled: true, name: 'filled', label: 'Filled' }, <span />)

        equal(icon(input).props.color, 'gray')
      })

      it('focused', () => {
        const renderer = shallow(Input, { name: 'focused', label: 'Focused' }, <span />)
        _input(renderer.getRenderOutput()).props.onFocus()
        equal(icon(renderer.getRenderOutput()).props.color, 'blue')
        _input(renderer.getRenderOutput()).props.onBlur()
        assert(icon(renderer.getRenderOutput()).props.color === undefined)
      })
    })
  })
})
