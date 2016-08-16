import React from 'react'
import * as Switch from '../Switch'
import * as UncontrolledSwitch from '../uncontrolled/Switch'
import * as Button from '../Button'
import { Title, Subtitle } from '../Text'
import Code from '../Code'

export default function Switches () {
  return (
    <div>
      <Title.Secondary margins>Regular</Title.Secondary>
      <Code>
        <Switch.Toggle>This is a toggle switch</Switch.Toggle>
      </Code>

      <Subtitle margins>Checked</Subtitle>
      <Code>
        <Switch.Toggle value={true}>This is a toggle switch checked</Switch.Toggle>
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledSwitch.Toggle value={true}>
          This is an uncontrolled toggle switch checked
        </UncontrolledSwitch.Toggle>
      </Code>

      <Subtitle margins>Error</Subtitle>
      <Code>
        <Switch.Toggle error>This is a toggle switch in an error state</Switch.Toggle>
      </Code>

      <Subtitle margins>Right</Subtitle>
      <Code>
        <Switch.Toggle align='right'>This is a toggle switch on the right side</Switch.Toggle>
      </Code>

      <Subtitle margins>Disabled</Subtitle>
      <Code>
        <Switch.Toggle disabled>This is a toggle switch disabled</Switch.Toggle>
      </Code>

      <Subtitle margins>Dynamic styling</Subtitle>
      <Code>
        <Switch.Toggle customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with dynamic styling</Switch.Toggle>
        <Switch.Toggle value={true} customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with dynamic styling</Switch.Toggle>
      </Code>

      <Title.Secondary margins>Checkbox</Title.Secondary>
      <Code>
        <Switch.Checkbox>This is a toggle switch with checkbox design</Switch.Checkbox>
        <Switch.Checkbox value={true}>This is a toggle switch with checkbox design</Switch.Checkbox>
      </Code>

      <Subtitle>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledSwitch.Checkbox>
          This is an uncontrolled checkbox switch
        </UncontrolledSwitch.Checkbox>
      </Code>

      <Subtitle margins>Checkbox with legal size text</Subtitle>
      <Code>
        <Switch.Checkbox legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch.Checkbox>
      </Code>

      <Subtitle margins>Checkbox with dynamic styling</Subtitle>
      <Code>
        <Switch.Checkbox customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with checkbox design and dynamic styling</Switch.Checkbox>
        <Switch.Checkbox value={true} customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with checkbox design and dynamic styling</Switch.Checkbox>
      </Code>
    </div>
  )
}
