/*
 * The default behaviour here is defined by
 * RadioGroup, so the tests focus on
 * the state of the object
 */

import StatefulRadioGroup from '../../components/uncontrolled/RadioGroup'
import { equal } from 'assert'
import { shallow } from '../helpers'

const data = [
  {id: 1, label: 'option1'},
  {id: 2, label: 'option2'}
]

const renderer = shallow(StatefulRadioGroup, { data, name: 'lorem' })
const radioGroup = () => renderer.getRenderOutput().props.children[0]
const input = () => renderer.getRenderOutput().props.children[1]

describe('StatefulRadioGroup', () => {
  it("changes the radio group selected when it's changed", () => {
    equal(radioGroup().props.selected, 1)
    equal(input().props.value, 1)
    radioGroup().props.onChange(2)
    equal(radioGroup().props.selected, 2)
    equal(input().props.value, 2)
  })
})
