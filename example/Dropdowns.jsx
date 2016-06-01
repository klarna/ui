import React from 'react'
import { SecondaryTitle, Subtitle } from '../components/Text'
import Code from './Code'
import Dropdown from '../components/Dropdown'
import Fieldset from '../components/Fieldset'

export default function Dropdowns () {
  const options = [
    { value: 1, label: 'Lorem' },
    { value: 2, label: 'Ipsum' }
  ]

  return (
    <div>
      <Code>
        <Dropdown label='Lorem ipsum' options={options} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Lorem ipsum' options={options} value={2} />
      </Code>

      <SecondaryTitle>Focused</SecondaryTitle>
      <Code>
        <Dropdown focus label='Lorem ipsum' options={options} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown focus label='Lorem ipsum' options={options} value={2} />
      </Code>

      <Subtitle>With Fake Focus</Subtitle>
      <Code>
        <Dropdown focus='fake' label='Lorem ipsum' options={options} />
      </Code>

      <SecondaryTitle>Loading</SecondaryTitle>
      <Code>
        <Dropdown label='Wait...' loading options={options} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Wait...' loading options={options} value={2} />
      </Code>

      <SecondaryTitle>Disabled</SecondaryTitle>
      <Code>
        <Dropdown disabled label='Disabled' options={options} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown disabled label='Disabled' options={options} value={2} />
      </Code>

      <SecondaryTitle>Error</SecondaryTitle>
      <Code>
        <Dropdown label='Something went wrong' error options={options} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Something went wrong' error options={options} value={2} />
      </Code>

      <SecondaryTitle>Warning</SecondaryTitle>
      <Code>
        <Dropdown label='Something is incorect' warning options={options} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Something is incorect' warning options={options} value={2} />
      </Code>

      <SecondaryTitle>Layouts</SecondaryTitle>
      <Subtitle>Simple</Subtitle>
      <Code>
        <Fieldset>
          <Dropdown size='1/2' left label='Lorem ipsum' options={options} />
          <Dropdown size='1/2' right label='Lorem ipsum' options={options} value={2} />
        </Fieldset>
      </Code>

      <Subtitle>Complex</Subtitle>
      <Code>
        <Fieldset>
          <Dropdown top left size='1/2' label='Given name' options={options} />
          <Dropdown center size='1/4' label='Middle name Middle name Middle name Middle name Middle name Middle name Middle name Middle name Middle name' options={options} />
          <Dropdown top right size='1/4' label='Last name' options={options} />
          <Dropdown left square size='1/5' label='Number' options={options} />
          <Dropdown right square size='4/5' label='Street Address' options={options} />
          <Dropdown left square size='1/3' label='Your favorite pokémon' options={options} />
          <Dropdown right square size='2/3' label='Android or iPhone: please explain' options={options} />
          <Dropdown left bottom size='2/5' label='Date of Birth' options={options} />
          <Dropdown right bottom size='3/5' label='Mobile phone number' options={options} />
        </Fieldset>
      </Code>
    </div>
  )
}
