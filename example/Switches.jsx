import React from 'react'
import Switch from '../components/Switch'
import Button from '../components/Button'
import Code from './Code'

export default function Switches () {
  return (
    <div>
      <h2>Primary</h2>

      <h5>Regular</h5>
      <Code>
        <Switch>This is a toggle switch</Switch>
      </Code>

      <h5>Checked</h5>
      <Code>
        <Switch checked>This is a toggle switch checked</Switch>
      </Code>

      <h5>Error</h5>
      <Code>
        <Switch error>This is a toggle switch in an error state</Switch>
      </Code>

      <h5>Right</h5>
      <Code>
        <Switch align='right'>This is a toggle switch on the right side</Switch>
      </Code>

      <h5>Disabled</h5>
      <Code>
        <Switch disabled>This is a toggle switch disabled</Switch>
      </Code>

      <h5>Checkbox</h5>
      <Code>
        <Switch design='checkbox'>This is a toggle switch with checkbox design</Switch>
      </Code>

      <h5>Checkbox with legal size text</h5>
      <Code>
        <Switch design='checkbox' legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch>
      </Code>

      <h5>In a form</h5>
      <Code>
        <form onSubmit={(event) => {
          event.preventDefault()
          window.alert(event.target.fries.value)
        }}>
          <Switch name='fries'>Would you like fries?</Switch>
          <Button size='small'>Try me</Button>
        </form>
      </Code>

      <h5>Outside a form (using a callback)</h5>
      <Code>
        <Switch onChange={(value) => {
          window.alert(value)
        }}>Would you like fries?</Switch>
      </Code>

    </div>
  )
}
