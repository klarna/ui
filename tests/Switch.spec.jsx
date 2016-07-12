import Switch from '../components/Switch'
import { ok, equal } from 'assert'
import { renderer, shallow } from './helpers'
import { spy } from 'sinon'

const render = renderer(Switch)

describe('Switch', () => {
  describe('default', () => {
    const _switch = render({}, 'Toggle me')

    it("renders tag 'div'", () => {
      equal(_switch.type, 'div')
    })

    it("has className 'cui__switch'", () => {
      equal(_switch.props.className, 'cui__switch')
    })

    it('should have the content', () => {
      ok(_switch.props.children[0].match('Toggle me'))
    })
  })

  describe('checked', () => {
    const _switch = render({ checked: true }, 'Toggle me')

    it("has className 'is-checked'", () => {
      ok(_switch.props.className.match('is-checked'))
    })
  })

  describe('error', () => {
    const _switch = render({ error: true }, 'Toggle me')

    it("has className 'is-error'", () => {
      ok(_switch.props.className.match('is-error'))
    })
  })

  describe('disabled', () => {
    const _switch = render({ disabled: true }, 'Toggle me')

    it("has className 'is-disabled'", () => {
      ok(_switch.props.className.match('is-disabled'))
    })
  })

  describe('align', () => {
    const _switch = render({ align: 'right' }, 'Toggle me')

    it("has className 'right'", () => {
      ok(_switch.props.className.match('right'))
    })
  })

  describe('design', () => {
    const _switch = render({ design: 'checkbox' }, 'Toggle me')

    it("has className 'checkbox'", () => {
      ok(_switch.props.className.match('checkbox'))
    })
  })

  describe('name', () => {
    const _switch = render({ name: 'fries' }, 'Toggle me')
    const input = (_switch) => _switch.props.children[1]

    it('renders input', () => {
      equal(input(_switch).type, 'input')
    })

    it('input should have name', () => {
      equal(input(_switch).props.name, 'fries')
    })

    it('input should be hidden', () => {
      equal(input(_switch).props.type, 'hidden')
    })

    it('input value should be false', () => {
      equal(input(_switch).props.value, false)
    })

    describe('checked', () => {
      const _switch = render({ checked: true, name: 'fries' }, 'Toggle me')

      it('input value should be true', () => {
        equal(input(_switch).props.value, true)
      })
    })
  })

  describe('onChange', () => {
    it('calls onChange with switch value', () => {
      const onChange = spy()
      const renderer = shallow(Switch, { onChange: onChange }, 'Toggle me')
      renderer.getRenderOutput().props.onClick()
      ok(onChange.calledWith(true))
      renderer.getRenderOutput().props.onClick()
      ok(onChange.calledWith(false))
    })
  })

  describe('behaviour', () => {
    it("has class 'is-checked' when clicked", () => {
      const renderer = shallow(Switch, {}, 'Toggle me')
      renderer.getRenderOutput().props.onClick()
      ok(renderer.getRenderOutput().props.className.match('is-checked'))
      renderer.getRenderOutput().props.onClick()
      ok(!renderer.getRenderOutput().props.className.match('is-checked'))
    })

    it("has class 'is-pressed' when mouse is down", () => {
      const renderer = shallow(Switch, {}, 'Toggle me')
      renderer.getRenderOutput().props.onMouseDown()
      ok(renderer.getRenderOutput().props.className.match('is-pressed'))
      renderer.getRenderOutput().props.onMouseUp()
      ok(!renderer.getRenderOutput().props.className.match('is-pressed'))
    })
  })

  describe('disabled', () => {
    const _switch = render({ disabled: true }, 'Toggle me')

    it("has class 'is-disabled'", () => {
      ok(_switch.props.className.match('is-disabled'))
    })

    it('does not have behaviour on click', () => {
      equal(_switch.props.onClick, false)
    })

    it('does not have behaviour on mouse down', () => {
      equal(_switch.props.onMouseDown, false)
    })
  })

  describe('legal', () => {
    const _switch = render({ legal: true }, 'Toggle me')

    it("has class 'legal'", () => {
      ok(_switch.props.className.match('legal'))
    })
  })

  describe('dynamic styling', () => {
    describe('switch', () => {
      const _switch = render({
        customize: {
          backgroundColor: 'red',
          bulletColor: 'blue'
        }
      }, 'Toggle me')

      it("renders tag 'div'", () => {
        equal(_switch.type, 'div')
      })

      it("has className 'cui__switch dynamic-styling'", () => {
        equal(_switch.props.className, 'cui__switch dynamic-styling')
      })

      it('should have the content', () => {
        ok(_switch.props.children[2].match('Toggle me'))
      })

      describe('bullet', () => {
        const bullet = _switch.props.children[0]

        it('should be of type "div"', () => {
          equal(bullet.type, 'div')
        })

        it('should have class "cui__switch__bullet"', () => {
          equal(bullet.props.className, 'cui__switch__bullet')
        })

        it('should have customized styles', () => {
          equal(bullet.props.style.backgroundColor, 'red')
          equal(bullet.props.style.borderColor, 'red')
        })
      })

      describe('checkmark', () => {
        const checkmark = _switch.props.children[1]

        it('should be of type "div"', () => {
          equal(checkmark.type, 'div')
        })

        it('should have class "cui__switch__checkmark"', () => {
          equal(checkmark.props.className, 'cui__switch__bullet__checkmark')
        })

        it('should have customized styles', () => {
          equal(checkmark.props.style.backgroundColor, 'blue')
        })
      })
    })

    describe('checkbox', () => {
      const _switch = render({
        design: 'checkbox',
        customize: {
          backgroundColor: 'red',
          bulletColor: 'blue'
        }
      }, 'Toggle me')

      it("renders tag 'div'", () => {
        equal(_switch.type, 'div')
      })

      it("has className 'cui__switch checkbox dynamic-styling'", () => {
        equal(_switch.props.className, 'cui__switch checkbox dynamic-styling')
      })

      it('should have the content', () => {
        ok(_switch.props.children[2].match('Toggle me'))
      })

      describe('bullet', () => {
        const bullet = _switch.props.children[0]

        it('should have type "div"', () => {
          equal(bullet.type, 'div')
        })

        it('should have className "cui__switch__bullet"', () => {
          equal(bullet.props.className, 'cui__switch__bullet')
        })

        it('should have customized styles', () => {
          equal(bullet.props.style.backgroundColor, 'red')
          equal(bullet.props.style.borderColor, 'red')
        })
      })

      describe('checkmark', () => {
        const checkmark = _switch.props.children[1]

        it('should have type "div"', () => {
          equal(checkmark.type, 'div')
        })

        it('should have className "cui__switch__bullet__checkmark"', () => {
          equal(checkmark.props.className, 'cui__switch__bullet__checkmark')
        })

        describe('check', () => {
          const check = checkmark.props.children.props.children.props.children[1]

          it('should have customized styles', () => {
            equal(check.props.stroke, 'blue')
          })
        })
      })
    })
  })
})
