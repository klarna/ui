import Loader from '../Loader'
import { equal, ok } from 'assert'
import { renderer } from './helpers'

const render = renderer(Loader)

describe('Loader', () => {
  describe('default', () => {
    const loader = render()

    it('renders tag "svg"', () => {
      equal('svg', loader.type)
    })

    it('has className "loader"', () => {
      equal('loader', loader.props.className)
    })
  })

  it("allows passing custom 'className' without overriding defaults", () => {
    const loader = render({ className: 'custom' })

    equal('loader custom', loader.props.className)
  })

  describe('inline', () => {
    const loader = render({ inline: true })

    it('has class "inline"', () => {
      ok(loader.props.className.match('inline'))
    })
  })

  describe('size', () => {
    it('has width 30 when size is "big"', () => {
      equal(30, render({ size: 'big' }).props.width)
    })

    it('has width 20 when size is default', () => {
      equal(20, render().props.width)
    })

    it('has width 15 when size is "small"', () => {
      equal(15, render({ size: 'small' }).props.width)
    })

    it('has width 10 when size is "tiny"', () => {
      equal(10, render({ size: 'tiny' }).props.width)
    })
  })
})
