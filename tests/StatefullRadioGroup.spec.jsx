/* global describe it */

/*
 * The default behaviour here is defined by
 * RadioGroup, so the tests focus on
 * the state of the object
 */

import StatefullRadioGroup from '../components/StatefullRadioGroup'
import { ok, equal } from 'assert'
import { shallow } from './helpers'
// import { spy } from 'sinon'

const data = [
  {id: 1, label: 'option1'},
  {id: 2, label: 'option2'}
]

const renderer = shallow(StatefullRadioGroup, { data, name: 'lorem' })
const radioGroup = () => renderer.getRenderOutput().props.children[0]
const input = () => renderer.getRenderOutput().props.children[1]

describe('StatefullRadioGroup', () => {
  it("changes the radio group selected when it's changed", () => {
    equal(radioGroup().props.selected, 1)
    equal(input().props.value, 1)
    radioGroup().props.onChange(2)
    equal(radioGroup().props.selected, 2)
    equal(input().props.value, 2)
  })
})
