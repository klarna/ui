import RadioGroup from '../components/RadioGroup'
import { ok, equal } from 'assert'
import { renderer } from './helpers'
import { spy } from 'sinon'

const render = renderer(RadioGroup)
const data = [
  {id: 1, label: 'option1', description: 'description1'},
  {id: 2, label: 'option2'}
]

describe('RadioGroup', () => {
  describe('default', () => {
    const onChange = spy()
    const radioGroup = render({ data, onChange, selected: 2 })
    const option = radioGroup.props.children
    const label = (option) => option.props.children[0]
    const description = (option) => option.props.children[1]

    it("renders tag 'div'", () => {
      equal(radioGroup.type, 'div')
    })

    it("has className 'cui__dropdown--radio'", () => {
      equal(radioGroup.props.className, 'cui__dropdown--radio')
    })

    it('first option is not selected', () => {
      equal(option[0].props.className, 'cui__dropdown--radio__option')
    })

    it('first option has label and description', () => {
      equal(label(option[0]).props.className, 'cui__dropdown--radio__option__heading')
      equal(label(option[0]).props.children, 'option1')
      equal(description(option[0]).props.className, 'cui__dropdown--radio__option__description')
      equal(description(option[0]).props.children, 'description1')
    })

    it('second option is selected', () => {
      equal(option[1].props.className, 'cui__dropdown--radio__option is-selected')
    })

    it('second option has label and no description', () => {
      equal(label(option[1]).props.className, 'cui__dropdown--radio__option__heading')
      equal(label(option[1]).props.children, 'option2')
      equal(description(option[1]), undefined)
    })

    it('calls onChange callback when options are clicked', () => {
      option[0].props.onClick()
      ok(onChange.calledWith(1))
      option[1].props.onClick()
      ok(onChange.calledWith(2))
    })
  })
})
