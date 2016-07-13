import Selector from '../components/Selector'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import { spy } from 'sinon'

const render = renderer(Selector)
const data = [
  {id: 1, label: 'option1'},
  {id: 2, label: 'option2'}
]

describe('Selector', () => {
  describe('default', () => {
    const onChange = spy()
    const selector = render({ data, onChange, selected: 2 })
    const options = selector.props.children
    const label = (option) => option.props.children[0]
    const icon = (option) => option.props.children[1]

    it("renders tag 'div'", () => {
      equal(selector.type, 'div')
    })

    it("has className 'cui__selector--direct title'", () => {
      equal(selector.props.className, 'cui__selector--direct title')
    })

    it('first option is not selected', () => {
      equal(icon(options[0]), null)
    })

    it('first option has label', () => {
      equal(label(options[0]).props.className, 'cui__selector--direct__label')
    })

    it('second option is selected', () => {
      equal(icon(options[1]).props.className, 'cui__selector--direct__icon')
    })

    it('second option has label', () => {
      equal(label(options[1]).props.className, 'cui__selector--direct__label')
    })

    it('calls onChange callback when options are clicked', () => {
      options[0].props.onClick()
      ok(onChange.calledWith(data[0]))
      options[1].props.onClick()
      ok(onChange.calledWith(data[1]))
    })
  })
})
