import Input from '../components/Input'
import assert, { equal } from 'assert'
import { renderer, shallow } from './helpers'

const render = renderer(Input)

const label = (input) => input.props.children[1]
const _input = (input) => input.props.children[2]

describe('Input', () => {
  describe('default', () => {
    const input = render({ name: 'test', label: 'Test' })

    it('renders cui__input', () => {
      equal(input.type, 'div')
      equal(input.props.className, 'cui__input')
    })

    it('renders a label', () => {
      equal(label(input).type, 'label')
      equal(label(input).props.children, 'Test')
      equal(label(input).props.className, 'cui__input__label')
    })

    it('renders an enabled text input', () => {
      equal(_input(input).type, 'input')
      equal(_input(input).props.value, '')
      equal(_input(input).props.name, 'test')
      equal(_input(input).props.className, 'cui__input__input')
      assert(_input(input).props.disabled === false)
    })
  })

  describe('sizes', () => {
    it("when 'big' has className 'big'", () => {
      const input = render({ big: true, name: 'test', label: 'Test' })

      equal(input.props.className, 'cui__input big')
    })

    it("when 'giant' has className 'giant'", () => {
      const input = render({ giant: true, name: 'test', label: 'Test' })

      equal(input.props.className, 'cui__input giant')
    })
  })

  describe('filled', () => {
    it("when has initial value has className 'is-filled'", () => {
      const input = render({ value: 'something', name: 'filled', label: 'Filled' })

      equal(input.props.className, 'cui__input is-filled')
    })
  })

  describe('focused', () => {
    it("has className 'is-focused'", () => {
      const renderer = shallow(Input, { name: 'focused', label: 'Focused', focus: true })

      equal(renderer.getRenderOutput().props.className, 'cui__input is-focused')
    })
  })

  describe('error', () => {
    const input = render({ error: true, name: 'filled', label: 'Ooops' })

    it("has className 'is-error'", () => {
      equal(input.props.className, 'cui__input is-error')
    })

    it('error is in the label', () => {
      equal(label(input).props.children, 'Ooops')
    })
  })

  describe('warning', () => {
    const input = render({ warning: true, name: 'filled', label: 'Hey!' })

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
})
