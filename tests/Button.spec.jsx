import Button from '../Button'
import { ok, equal, deepEqual } from 'assert'
import { renderer } from './helpers'

const render = renderer(Button)

describe('Button', () => {
  describe('default', () => {
    const button = render({}, 'Click me')

    it("renders tag 'button'", () => {
      equal(button.type, 'button')
    })

    it("has className 'button--primary'", () => {
      equal(button.props.className, 'button--primary')
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

    it("has className 'button--secondary'", () => {
      equal(
        button.props.className,
        'button--secondary'
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

    describe('Loader', () => {
      it('is of type loader', () => {
        equal(button.props.children.type.name, 'Loader')
      })

      it('is inline', () => {
        equal(button.props.children.props.inline, true)
      })
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

      equal('button--primary small', button.props.className)
    })

    it("when 'big' has className 'big'", () => {
      const button = render({ size: 'big' })

      equal('button--primary big', button.props.className)
    })
  })

  describe('customize', () => {
    describe('primary', () => {
      const button = render({
        customize: {
          textColor: 'red',
          backgroundColor: 'brown'
        }
      }, 'Click me')

      describe('span', () => {
        it('is of type span', () => {
          equal(button.props.children.type, 'span')
        })

        it('has className button__label', () => {
          equal(button.props.children.props.className, 'button__label')
        })
      })

      it('has the correct customized styles', () => {
        equal(button.props.style.color, 'red')
        equal(button.props.style.backgroundColor, 'brown')
        equal(button.props.style.borderColor, 'brown')
      })

      describe('loading', () => {
        const loadingButton = render({
          loading: true,
          customize: {
            textColor: 'red',
            backgroundColor: 'brown'
          }
        }, 'Click me')

        describe('loader', () => {
          const loader = loadingButton.props.children.props.children

          it('is of type Loader', () => {
            equal(loader.type.name, 'Loader')
          })

          it('is inline', () => {
            equal(loader.props.inline, true)
          })

          it('has the color of the text', () => {
            const red = [255, 0, 0]
            deepEqual(loader.props.color, red)
          })
        })
      })
    })

    describe('secondary', () => {
      const button = render({
        design: 'secondary',
        customize: {
          textColor: 'yellow',
          backgroundColor: 'bisque'
        }
      }, 'Click me')

      describe('div', () => {
        it('is of type div', () => {
          equal(button.props.children.type, 'div')
        })

        it('has className button__label', () => {
          equal(button.props.children.props.className, 'button__label')
        })
      })

      describe('span', () => {
        const span = button.props.children.props.children[1]

        it('is of type span', () => {
          equal(span.type, 'span')
        })

        it('has className button__label--alt', () => {
          equal(span.props.className, 'button__label--alt')
        })
      })

      it('has the correct customized styles', () => {
        equal(button.props.style.color, 'bisque')
        equal(button.props.style.backgroundColor, 'bisque')
        equal(button.props.style.borderColor, 'bisque')
      })

      describe('disabled', () => {
        const button = render({
          design: 'secondary',
          disabled: true,
          customize: {
            textColor: 'yellow',
            backgroundColor: 'bisque'
          }
        }, 'Click me')

        it('should not have a span', () => {
          equal(button.props.children.props.children[1].type, undefined)
        })
      })

      describe('loading', () => {
        const loadingButton = render({
          loading: true,
          design: 'secondary',
          customize: {
            textColor: 'yellow',
            backgroundColor: 'bisque'
          }
        }, 'Click me')

        describe('loader', () => {
          const loader = loadingButton.props.children.props.children[0]

          it('is of type Loader', () => {
            equal(loader.type.name, 'Loader')
          })

          it('is inline', () => {
            equal(loader.props.inline, true)
          })

          it('has the color of the background', () => {
            const bisque = [ 255, 228, 196 ]
            deepEqual(loader.props.color, bisque)
          })
        })
      })
    })
  })

  describe('custom props', () => {
    it('overrides disabled default', () => {
      ok(render({ disabled: true }).props.disabled)
    })

    it("allows passing custom 'className' without overriding defaults", () => {
      const button = render({ className: 'custom' })

      equal('button--primary custom', button.props.className)
    })

    it('allows passing other props', () => {
      const props = { foo: 'foo', bar: 'bar' }
      const { foo, bar } = render(props).props

      deepEqual(props, { foo, bar })
    })
  })
})
