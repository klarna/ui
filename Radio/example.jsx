/* globals alert */

import React from 'react'
import Radio from '../Radio'
import UncontrolledRadio from '../uncontrolled/Radio'
import { Title, Paragraph } from '../Text'
import Subtitle from '../Subtitle'
import Code from '../Code'

export default function Radios () {
  const data = [
    {id: 1, label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
    {id: 2, label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
  ]

  return (
    <div>
      <Paragraph.Primary margins>
        Radios allow the user to pick one option among many
        with a design similar to HTML's input type radio.
      </Paragraph.Primary>

      <Title.Secondary margins>Controlled</Title.Secondary>
      <Paragraph.Primary margins>
        Stateless Radios shall be used when you will control
        it's selected value. Therefore, you're in charge of
        implementing the props <strong>onChange</strong> and <strong>selected</strong>.
      </Paragraph.Primary>
      <Paragraph.Primary margins>
        As a rule of thumb, you'll use the stateless component if
        the Radio is not in a form, and you want to trigger
        something on every change of this component.
      </Paragraph.Primary>
      <Paragraph.Primary margins>
        An example implementation of how you should consume the
        Radio is the UncontrolledRadio itself.
      </Paragraph.Primary>
      <Code>
        <Radio value={1} onChange={alert} data={data} />
      </Code>

      <Subtitle>Borderless</Subtitle>
      <Code>
        <Radio borderless value={1} onChange={alert} data={data} />
      </Code>

      <Title.Secondary margins>Uncontrolled</Title.Secondary>
      <Paragraph.Primary margins>
        Use the statefull selector if you don't want to control
        the selector, or you're using it on a form, passing the
        prop <b>name</b>.
      </Paragraph.Primary>
      <Code>
        <UncontrolledRadio data={data} />
      </Code>
    </div>
  )
}
