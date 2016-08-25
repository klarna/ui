import React from 'react'
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

        <UncontrolledSwitch.Toggle
          align='right'
          name='toggle-switch-uncontrolled-right'>
          This is an uncontrolled toggle switch on the right
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
          This is a toggle switch focused
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Error</Subtitle>
      <Code>
        <Switch.Toggle error name='toggle-switch-error'>
          This is a toggle switch in an error state
        </Switch.Toggle>
      </Code>

      <Subtitle margins>Disabled</Subtitle>
      <Code>
        <Switch.Toggle disabled name='toggle-switch-disabled'>
          This is a toggle switch disabled
        </Switch.Toggle>

        <Switch.Toggle disabled value name='toggle-switch-disabled-checked'>
          This is a toggle switch checked and disabled
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

        <UncontrolledSwitch.Toggle
          align='right'
          name='toggle-switch-dynamic-uncontrolled-right'
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is an uncontrolled toggle switch with dynamic styling on the right
        </UncontrolledSwitch.Toggle>
      </Code>

      <Title.Secondary margins>Checkbox</Title.Secondary>
      <Code>
        <Switch.Checkbox name='checkbox-unchecked'>
          This is a toggle switch with checkbox design
        </Switch.Checkbox>
        <Switch.Checkbox name='checkbox-checked' value>
          This is a toggle switch with checkbox design
        </Switch.Checkbox>
      </Code>

      <Subtitle>Uncontrolled</Subtitle>
      <Code>
        <UncontrolledSwitch.Checkbox name='checkbox-uncontrolled'>
          This is an uncontrolled checkbox switch
        </UncontrolledSwitch.Checkbox>
        <UncontrolledSwitch.Checkbox
          align='right'
          name='checkbox-uncontrolled-right'>
          This is an uncontrolled checkbox switch on the right
        </UncontrolledSwitch.Checkbox>
      </Code>

      <Subtitle margins>Checkbox with legal size text</Subtitle>
      <Code>
        <Switch.Checkbox name='checkbox-legal' legal>
          This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines
        </Switch.Checkbox>
      </Code>

      <Subtitle margins>Right</Subtitle>
      <Code>
        <Switch.Checkbox name='checkbox-right' align='right' legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch.Checkbox>
      </Code>

      <Subtitle margins>Disabled</Subtitle>
      <Code>
        <Switch.Checkbox name='checkbox-disabled' legal>This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines</Switch.Checkbox>
      </Code>

      <Subtitle margins>Checkbox with dynamic styling</Subtitle>
      <Code>
        <Switch.Checkbox
          name='checkbox-dynamic-styling'
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is a toggle switch with checkbox design and dynamic styling
        </Switch.Checkbox>
        <Switch.Checkbox
          name='checkbox-dynamic-styling-checked'
          value
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is a toggle switch with checkbox design and dynamic styling
        </Switch.Checkbox>
        <UncontrolledSwitch.Checkbox
          name='checkbox-dynamic-styling-uncontrolled'
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is a dynamically styled, uncontrolled checkbox switch
        </UncontrolledSwitch.Checkbox>
        <UncontrolledSwitch.Checkbox
          align='right'
          name='checkbox-dynamic-styling-uncontrolled-right'
          customize={{
            backgroundColor: '#3500C8',
            bulletColor: '#F9FF3C'
          }}>
          This is a dynamically styled, uncontrolled checkbox switch on the right
        </UncontrolledSwitch.Checkbox>
      </Code>
    </div>
  )
}
