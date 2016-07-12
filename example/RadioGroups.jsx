/* globals alert */

import React from 'react'
import RadioGroup from '../components/RadioGroup'
import UncontrolledRadioGroup from '../components/uncontrolled/RadioGroup'
import Button from '../components/Button'
import { SecondaryTitle, Subtitle, Paragraph } from '../components/Text'
import Code from './Code'

export default function RadioGroups () {
  const data = [
    {id: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  return (
    <div>
      <Paragraph>
        RadioGroups allow the user to pick one option among many
        with a design similar to HTML's input type radio.
      </Paragraph>

      <SecondaryTitle>Stateless</SecondaryTitle>
      <Paragraph>
        Stateless RadioGroups shall be used when you will control
        it's selected value. Therefore, you're in charge of
        implementing the props <b>onChange</b> and <b>selected</b>.
      </Paragraph>
      <Paragraph>
        As a rule of thumb, you'll use the stateless component if
        the RadioGroup is not in a form, and you want to trigger
        something on every change of this component.
      </Paragraph>
      <Paragraph>
        An example implementation of how you should consume the
        RadioGroup is the UncontrolledRadioGroup itself.
      </Paragraph>
      <Code>
        <RadioGroup selected={1} onChange={alert} data={data} />
      </Code>

      <SecondaryTitle>Statefull</SecondaryTitle>
      <Paragraph>
        Use the statefull selector if you don't want to control
        the selector, or you're using it on a form, passing the
        prop <b>name</b>.
      </Paragraph>
      <Code>
        <UncontrolledRadioGroup data={data} />
      </Code>

      <Subtitle>In a form</Subtitle>
      <Code>
        <form onSubmit={(event) => {
          event.preventDefault()
          window.alert(event.target.lorem.value)
        }}>
          <UncontrolledRadioGroup name='lorem' data={data} />
          <Button size='small'>Try me</Button>
        </form>
      </Code>
    </div>
  )
}
