import Tooltip from '../components/Tooltip'
import { ok, equal } from 'assert'
import { renderer } from './helpers'

const render = renderer(Tooltip)

describe('Tooltip', () => {
  describe('default', () => {
    const tooltip = render({}, 'Lorem ipsum')

    it("renders tag 'div'", () => {
      equal(tooltip.type, 'div')
    })

    it("has className 'cui__tooltip'", () => {
      equal(tooltip.props.className, 'cui__tooltip')
    })

    it('should have the content', () => {
      ok(tooltip.props.children.match('Lorem ipsum'))
    })
  })

  describe('arrows', () => {
    Tooltip.arrows.forEach((arrow) => {
      describe(arrow, () => {
        const tooltip = render({ arrow }, 'Toggle me')

        it(`has className '${arrow}'`, () => {
          ok(tooltip.props.className.match(arrow))
        })
      })
    })
  })

  describe('border', () => {
    const tooltip = render({ border: true }, 'Lorem ipsum')

    it("has className 'cui__tooltip'", () => {
      ok(tooltip.props.className.match('border'))
    })
  })
})
