/* globals alert */

import React from 'react'
import UncontrolledRadioGroup from '../components/uncontrolled/RadioGroup'
import Selector from '../components/Selector'
import Button from '../components/Button'
import { SecondaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'
import Dropdown from '../components/Dropdown'

export default function Dropdowns () {
  const data = [
    {id: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  return (
    <div>
      <Paragraph>
        Dropdown allow the user to pick one option among many
        with a design similar to HTML's select.
      </Paragraph>

      <Code>
        <Dropdown label='Lorem ipsum' data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <SecondaryTitle>Focused</SecondaryTitle>
      <Code>
        <Dropdown focused label='Lorem ipsum' data={data} />
      </Code>

      <Subtitle>With Selected Value</Subtitle>
      <Code>
        <Dropdown focused label='Lorem ipsum' data={data} selected={1} />
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

      <Subtitle>Layouts</Subtitle>
      <Code>
        <Dropdown size='1/2' left label='Lorem ipsum' data={data} />
        <Dropdown size='1/2' right label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <Code>
        <Dropdown top left size='1/2' label='Given name' data={[]} />
        <Dropdown center size='1/4' label='Middle name Middle name Middle name Middle name Middle name Middle name Middle name Middle name Middle name' data={[]} />
        <Dropdown top right size='1/4' label='Last name' data={[]} />
        <Dropdown left square size='1/5' label='Number' data={[]} />
        <Dropdown right square size='4/5' label='Street Address' data={[]} />
        <Dropdown left square size='1/3' label='Your favorite pokémon' data={[]} />
        <Dropdown right square size='2/3' label='Android or iPhone: please explain' data={[]} />
        <Dropdown left bottom size='2/5' label='Date of Birth' data={[]} />
        <Dropdown right bottom size='3/5' label='Mobile phone number' data={[]} />
      </Code>
    </div>
  )
}
