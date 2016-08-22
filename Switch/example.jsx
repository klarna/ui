import React from 'react'
import UncontrolledField from '../uncontrolled/Field'
import * as Switch from '../Switch'
import * as UncontrolledSwitch from '../uncontrolled/Switch'
import { Title, Subtitle } from '../Text'
import Code from '../Code'

export default function Switches () {
  return (
    <div>
      <Title.Secondary margins>Toggle</Title.Secondary>
      <Code>
        <Switch.Toggle name='toggle-switch'>
          This is a toggle switch
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledSwitch.Toggle value name='toggle-switch-uncontrolled'>
          This is an uncontrolled toggle switch checked
        </UncontrolledSwitch.Toggle>
      </Code>

      <Subtitle margins>Checked</Subtitle>
      <Code>
        <Switch.Toggle value name='toggle-switch-checked'>
          This is a toggle switch checked
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Focused</Subtitle>
      <Code>
        <Switch.Toggle focus value name='toggle-switch-focused'>
          This is a toggle switch checked
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Error</Subtitle>
      <Code>
        <Switch.Toggle error name='toggle-switch-error'>
          This is a toggle switch in an error state
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Right</Subtitle>
      <Code>
        <Switch.Toggle align='right' name='toggle-switch-right'>
          This is a toggle switch on the right side
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Disabled</Subtitle>
      <Code>
        <Switch.Toggle disabled name='toggle-switch-disabled'>
          This is a toggle switch disabled
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Dynamic styling</Subtitle>
      <Code>
        <Switch.Toggle
          name='toggle-switch-dynamic'
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is a toggle switch with dynamic styling unchecked
        </Switch.Toggle>

        <Switch.Toggle
          name='toggle-switch-dynamic-checked'
          value
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is a toggle switch with dynamic styling
        </Switch.Toggle>

        <UncontrolledSwitch.Toggle
          name='toggle-switch-dynamic-uncontrolled'
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is an uncontrolled toggle switch with dynamic styling
        </UncontrolledSwitch.Toggle>
      </Code>
{/*
      <Title.Secondary margins>Checkbox</Title.Secondary>
      <Code>
        <Switch.Checkbox>This is a toggle switch with checkbox design</Switch.Checkbox>
        <Switch.Checkbox value>This is a toggle switch with checkbox design</Switch.Checkbox>
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
        <Switch.Checkbox value customize={{ backgroundColor: '#3500C8', bulletColor: '#F9FF3C' }}>This is a toggle switch with checkbox design and dynamic styling</Switch.Checkbox>
      </Code> */}
    </div>
  )
}
