import React from 'react'
import Switch from '../Switch'
import Button from '../Button'
import { Title } from '../Text'
import Code from '../Code'

export default function Switches () {
  return (
    <div>
      <Title.Secondary margins>Regular</Title.Secondary>
      <Code>
        <Switch>This is a toggle switch</Switch>
      </Code>

      <Title.Secondary margins>Checked</Title.Secondary>
      <Code>
        <Switch checked>This is a toggle switch checked</Switch>
      </Code>

      <Title.Secondary margins>Error</Title.Secondary>
      <Code>
        <Switch error>This is a toggle switch in an error state</Switch>
      </Code>

      <Title.Secondary margins>Right</Title.Secondary>
      <Code>
        <Switch align='right'>This is a toggle switch on the right side</Switch>
      </Code>

      <Title.Secondary margins>Disabled</Title.Secondary>
      <Code>
        <Switch disabled>This is a toggle switch disabled</Switch>
      </Code>

      <Title.Secondary margins>Dynamic styling</Title.Secondary>
      <Code>
        <Switch customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with dynamic styling</Switch>
      </Code>

      <Title.Secondary margins>Checkbox</Title.Secondary>
      <Code>
        <Switch design='checkbox'>This is a toggle switch with checkbox design</Switch>
      </Code>

      <Title.Secondary margins>Checkbox with legal size text</Title.Secondary>
      <Code>
        <Switch design='checkbox' legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch>
      </Code>

      <Title.Secondary margins>Checkbox with dynamic styling</Title.Secondary>
      <Code>
        <Switch design='checkbox' customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with checkbox design and dynamic styling</Switch>
      </Code>

      <Title.Secondary margins>In a form</Title.Secondary>
      <Code>
        <form onSubmit={(event) => {
          event.preventDefault()
          window.alert(event.target.fries.value)
        }}>
          <Switch name='fries'>Would you like fries?</Switch>
          <Button size='small'>Try me</Button>
        </form>
      </Code>

      <Title.Secondary margins>Outside a form (using a callback)</Title.Secondary>
      <Code>
        <Switch onChange={(value) => {
          window.alert(value)
        }}>Would you like fries?</Switch>
      </Code>

    </div>
  )
}
