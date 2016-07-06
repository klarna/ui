import Button from '../components/Button'
import { ok, equal, deepEqual } from 'assert'
import { renderer } from './helpers'

const render = renderer(Button)

describe('Button', () => {
  describe('default', () => {
    const button = render({}, 'Click me')

    it("renders tag 'button'", () => {
      equal(button.type, 'button')
    })

    it("has className 'cui__button--primary'", () => {
      equal(button.props.className, 'cui__button--primary')
    })

    it('is not disabled', () => {
      ok(!button.props.disabled)
    })

    it('does not have class is-disabled', () => {
      ok(!button.props.className.match('is-disabled'))
    })

    it('does not have class is-loading', () => {
      ok(!button.props.className.match('is-loading'))
    })

    it('should have the content', () => {
      ok(button.props.children.match('Click me'))
    })
  })

  describe('disabled', () => {
    const button = render({ disabled: true })

    it('is disabled', () => {
      ok(button.props.disabled)
    })

    it('has class is-disabled', () => {
      ok(button.props.className.match('is-disabled'))
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
    const button = render({ loading: true }, 'Click me')

    it('has class is-loading', () => {
      ok(button.props.className.match('is-loading'))
    })

    it('is disabled', () => {
      ok(button.props.disabled)
    })

    it('hides the content', () => {
      ok(!button.props.children)
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
