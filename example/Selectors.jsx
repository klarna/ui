/* globals alert */

import React from 'react'
import UncontrolledRadioGroup from '../components/uncontrolled/RadioGroup'
import RadioGroup from '../components/RadioGroup'
import Selector from '../components/Selector'
import Button from '../components/Button'
import { SecondaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'
import Dropdown from '../components/Dropdown'

export default function Selectors () {
  const data = [
    {id: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  return (
    <div>
      <SecondaryTitle>Dropdown</SecondaryTitle>
      <Paragraph>
        Dropdown allow the user to pick one option among many
        with a design similar to HTML's select.
      </Paragraph>

      <Subtitle>Stateless</Subtitle>
      <Paragraph>
        Stateless Dropdowns shall be used when you will control
        it's selected value. Therefore, you're in charge of
        implementing the props <b>onChange</b> and <b>selected</b>.
      </Paragraph>

      <h5>Default</h5>
      <Code>
        <Dropdown label='Lorem ipsum' data={data} />
        <Dropdown label='Lorem ipsum' data={data} selected={1} />
        <Dropdown label='Lorem ipsum' data={data} selected={2} />
      </Code>

      <h5>Focused</h5>
      <Code>
        <Dropdown focused label='Lorem ipsum' data={data} />
        <Dropdown focused label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <h5>Loading</h5>
      <Code>
        <Dropdown label='Wait...' loading data={data} />
        <Dropdown label='Wait...' loading data={data} selected={1} />
      </Code>

      <h5>Disabled</h5>
      <Code>
        <Dropdown disabled label='Disabled' data={data} />
        <Dropdown disabled label='Disabled' data={data} selected={1} />
      </Code>

      <h5>Disabled & loading</h5>
      <Code>
        <Dropdown disabled loading label='Disabled' data={data} />
        <Dropdown disabled loading label='Disabled' data={data} selected={1} />
      </Code>

      <h5>Error</h5>
      <Code>
        <Dropdown error='Something went wrong' label='Lorem ipsum' data={data} />
        <Dropdown error='Something went wrong' label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <h5>Warning</h5>
      <Code>
        <Dropdown warning='Something is incorect' label='Lorem ipsum' data={data} />
        <Dropdown warning='Something is incorect' label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <h5>Layouts</h5>
      <Code>
        <Dropdown size='half' position='left' label='Lorem ipsum' data={data} />
        <Dropdown size='half' position='right' label='Lorem ipsum' data={data} selected={1} />
      </Code>

      <Code>
        <Dropdown size='half' position='top-left' label='Lorem' data={[]} />
        <Dropdown size='half' position='top-right' label='Lorem' data={[]} />
        <Dropdown size='quarter' position='square' label='Lorem' data={[]} />
        <Dropdown size='half' position='center' label='Lorem' data={[]} />
        <Dropdown size='quarter' position='center' label='Lorem' data={[]} />
        <Dropdown size='half' position='bottom-left' label='Lorem' data={[]} />
        <Dropdown size='half' position='bottom-right' label='Lorem' data={[]} />
      </Code>

      <SecondaryTitle>RadioGroup</SecondaryTitle>
      <Paragraph>
        RadioGroups allow the user to pick one option among many
        with a design similar to HTML's input type radio.
      </Paragraph>

      <Subtitle>Stateless</Subtitle>
      <Paragraph>
        Stateless RadioGroups shall be used when you will control
        it's selected value. Therefore, you're in charge of
        implementing the props <b>onChange</b> and <b>selected</b>.
      </Paragraph>
      <Paragraph>
        As a rule of thumb, you'll use the stateless component if
        the RadioGroup is not in a form, and you wanna trigger
        something on every change of this component.
      </Paragraph>
      <Paragraph>
        An example implementation of how you should consume the
        RadioGroup is the UncontrolledRadioGroup itself.
      </Paragraph>
      <Code>
        <RadioGroup selected={1} onChange={alert} data={data} />
      </Code>

      <Subtitle>Statefull</Subtitle>
      <Paragraph>
        Use the statefull selector if you don't wanna control
        the selector, or you're using it on a form, passing the
        prop <b>name</b>.
      </Paragraph>
      <Code>
        <UncontrolledRadioGroup data={data} />
      </Code>

      <Subtitle>Statefull in a form</Subtitle>
      <Code>
        <form onSubmit={(event) => {
          event.preventDefault()
          window.alert(event.target.lorem.value)
        }}>
          <UncontrolledRadioGroup name='lorem' data={data} />
          <Button size='small'>Try me</Button>
        </form>
      </Code>
      <SecondaryTitle>Selector</SecondaryTitle>
      <Paragraph>
        Same as RadioGroups with different style.
      </Paragraph>

      <Code>
        <Selector selected={1} onChange={alert} data={data} />
      </Code>
    </div>
  )
}
