import React from 'react'
import * as Switch from '../Switch'
import * as Button from '../Button'
import { Title } from '../Text'
import Code from '../Code'

export default function Switches () {
  return (
    <div>
      <Title.Secondary margins>Regular</Title.Secondary>
      <Code>
        <Switch.Toggle>This is a toggle switch</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Checked</Title.Secondary>
      <Code>
        <Switch.Toggle checked>This is a toggle switch checked</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Error</Title.Secondary>
      <Code>
        <Switch.Toggle error>This is a toggle switch in an error state</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Right</Title.Secondary>
      <Code>
        <Switch.Toggle align='right'>This is a toggle switch on the right side</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Disabled</Title.Secondary>
      <Code>
        <Switch.Toggle disabled>This is a toggle switch disabled</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Dynamic styling</Title.Secondary>
      <Code>
        <Switch.Toggle customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with dynamic styling</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Checkbox</Title.Secondary>
      <Code>
        <Switch.Checkbox>This is a toggle switch with checkbox design</Switch.Checkbox>
      </Code>

      <Title.Secondary margins>Checkbox with legal size text</Title.Secondary>
      <Code>
        <Switch.Checkbox legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch.Checkbox>
      </Code>

      <Title.Secondary margins>Checkbox with dynamic styling</Title.Secondary>
      <Code>
        <Switch.Checkbox customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with checkbox design and dynamic styling</Switch.Checkbox>
      </Code>

      <Title.Secondary margins>In a form</Title.Secondary>
      <Code>
        <form onSubmit={(event) => {
          event.preventDefault()
          window.alert(event.target.fries.value)
        }}>
          <Switch.Toggle name='fries'>Would you like fries?</Switch.Toggle>
          <Button.Primary size='small'>Try me</Button.Primary>
        </form>
      </Code>

      <Title.Secondary margins>Outside a form (using a callback)</Title.Secondary>
      <Code>
        <Switch.Toggle onChange={(value) => {
          window.alert(value)
        }}>Would you like fries?</Switch.Toggle>
      </Code>
    </div>
  )
}
