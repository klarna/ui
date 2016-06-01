/* globals alert */

import React from 'react'
import { SecondaryTitle, Subtitle, Paragraph } from '../components/Text'
import Button from '../components/Button'
import Code from './Code'
import Dropdown from '../components/Dropdown'
import Fieldset from '../components/Fieldset'
import Selector from '../components/Selector'
import UncontrolledRadioGroup from '../components/uncontrolled/RadioGroup'

export default function Dropdowns () {
  const data = [
    {value: 1, label: 'Lorem' },
    {value: 2, label: 'Ipsum' }
  ]

  return (
    <div>
      <Code>
        <Dropdown label='Lorem ipsum' data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <SecondaryTitle>Focused</SecondaryTitle>
      <Code>
        <Dropdown focus label='Lorem ipsum' data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown focus label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <Subtitle>With Fake Focus</Subtitle>
      <Code>
        <Dropdown focus='fake' label='Lorem ipsum' data={data} />
      </Code>

      <SecondaryTitle>Loading</SecondaryTitle>
      <Code>
        <Dropdown label='Wait...' loading data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Wait...' loading data={data} selected={1} />
      </Code>

      <SecondaryTitle>Disabled</SecondaryTitle>
      <Code>
        <Dropdown disabled label='Disabled' data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown disabled label='Disabled' data={data} selected={1} />
      </Code>

      <SecondaryTitle>Error</SecondaryTitle>
      <Code>
        <Dropdown label='Something went wrong' error data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Something went wrong' error data={data} selected={1} />
      </Code>

      <SecondaryTitle>Warning</SecondaryTitle>
      <Code>
        <Dropdown label='Something is incorect' warning data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Something is incorect' warning data={data} selected={1} />
      </Code>

      <SecondaryTitle>Layouts</SecondaryTitle>
      <Subtitle>Simple</Subtitle>
      <Code>
        <Fieldset>
          <Dropdown size='1/2' left label='Lorem ipsum' data={data} />
          <Dropdown size='1/2' right label='Lorem ipsum' data={data} selected={1} />
        </Fieldset>
      </Code>

      <Subtitle>Complex</Subtitle>
      <Code>
        <Fieldset>
          <Dropdown top left size='1/2' label='Given name' data={data} />
          <Dropdown center size='1/4' label='Middle name Middle name Middle name Middle name Middle name Middle name Middle name Middle name Middle name' data={data} />
          <Dropdown top right size='1/4' label='Last name' data={data} />
          <Dropdown left square size='1/5' label='Number' data={data} />
          <Dropdown right square size='4/5' label='Street Address' data={data} />
          <Dropdown left square size='1/3' label='Your favorite pokémon' data={data} />
          <Dropdown right square size='2/3' label='Android or iPhone: please explain' data={data} />
          <Dropdown left bottom size='2/5' label='Date of Birth' data={data} />
          <Dropdown right bottom size='3/5' label='Mobile phone number' data={data} />
        </Fieldset>
      </Code>
    </div>
  )
}
