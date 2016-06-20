import React from 'react'
import Switch from '../components/Switch'
import Button from '../components/Button'
import { SecondaryTitle } from '../components/Text'
import Code from './Code'

export default function Switches () {
  return (
    <div>
      <SecondaryTitle margins>Regular</SecondaryTitle>
      <Code>
        <Switch>This is a toggle switch</Switch>
      </Code>

      <SecondaryTitle margins>Checked</SecondaryTitle>
      <Code>
        <Switch checked>This is a toggle switch checked</Switch>
      </Code>

      <SecondaryTitle margins>Error</SecondaryTitle>
      <Code>
        <Switch error>This is a toggle switch in an error state</Switch>
      </Code>

      <SecondaryTitle margins>Right</SecondaryTitle>
      <Code>
        <Switch align='right'>This is a toggle switch on the right side</Switch>
      </Code>

      <SecondaryTitle margins>Disabled</SecondaryTitle>
      <Code>
        <Switch disabled>This is a toggle switch disabled</Switch>
      </Code>

      <SecondaryTitle margins>Checkbox</SecondaryTitle>
      <Code>
        <Switch design='checkbox'>This is a toggle switch with checkbox design</Switch>
      </Code>

      <SecondaryTitle margins>Checkbox with legal size text</SecondaryTitle>
      <Code>
        <Switch design='checkbox' legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch>
      </Code>

      <SecondaryTitle margins>In a form</SecondaryTitle>
      <Code>
        <form onSubmit={(event) => {
          event.preventDefault()
          window.alert(event.target.fries.value)
        }}>
          <Switch name='fries'>Would you like fries?</Switch>
          <Button size='small'>Try me</Button>
        </form>
      </Code>

      <SecondaryTitle margins>Outside a form (using a callback)</SecondaryTitle>
      <Code>
        <Switch onChange={(value) => {
          window.alert(value)
        }}>Would you like fries?</Switch>
      </Code>

    </div>
  )
}
