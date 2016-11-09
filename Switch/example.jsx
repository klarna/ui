import React from 'react'
import * as Switch from '../Switch'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Switch',
  icon: 'Switch',

  variations: [
    {
      title: 'Toggle',
      require: 'import * as Switch from \'@klarna/ui/Switch\'',
      type: LIVE,

      examples: {
        Regular: [
          <Switch.Toggle key={1} name='toggle-switch'>
            This is a toggle switch
          </Switch.Toggle>,

          <Switch.Toggle key={2} defaultValue name='toggle-switch-checked'>
            This is a toggle switch checked
          </Switch.Toggle>
        ],

        Controlled: [
          <Switch.Toggle
            key={1}
            focus
            value={false}
            name='toggle-switch-uncontrolled'>
            This is an uncontrolled toggle switch checked
          </Switch.Toggle>,

          <Switch.Toggle
            key={2}
            align='right'
            value
            name='toggle-switch-uncontrolled-right'>
            This is an uncontrolled toggle switch on the right
          </Switch.Toggle>
        ],

        'With legal size text': <Switch.Toggle name='toggle-legal' legal>
          This is a toggle switch with legal size text that usually will fold into multiple lines
        </Switch.Toggle>,

        Disabled: [
          <Switch.Toggle key={1} disabled name='toggle-switch-disabled'>
            This is a toggle switch disabled
          </Switch.Toggle>,

          <Switch.Toggle
            key={2} disabled defaultValue
            name='toggle-switch-disabled-checked'>
            This is a toggle switch checked and disabled
          </Switch.Toggle>
        ],

        'With error': <Switch.Toggle error name='toggle-switch-error'>
          This is a toggle switch in an error state
        </Switch.Toggle>,

        'With customizations': [
          <Switch.Toggle
            key={1}
            name='toggle-switch-dynamic-uncontrolled'
            customize={{
              backgroundColor: '#3500C8',
              bulletColor: '#F9FF3C',
              textColor: '#3500C8'
            }}>
            This is an uncontrolled toggle switch with dynamic styling
          </Switch.Toggle>,

          <Switch.Toggle
            key={2}
            align='right'
            name='toggle-switch-dynamic-uncontrolled-right'
            customize={{
              backgroundColor: '#3500C8',
              bulletColor: '#F9FF3C',
              textColor: '#3500C8'
            }}>
            This is an uncontrolled toggle switch with dynamic styling on the right
          </Switch.Toggle>
        ]
      }
    },

    {
      title: 'Checkbox',
      require: 'import * as Switch from \'@klarna/ui/Switch\'',
      type: LIVE,

      examples: {
        Regular: [
          <Switch.Checkbox key={1} name='checkbox-unchecked'>
            This is a toggle switch with checkbox design
          </Switch.Checkbox>,

          <Switch.Checkbox key={2} name='checkbox-checked' defaultValue>
            This is a toggle switch with checkbox design
          </Switch.Checkbox>
        ],

        Controlled: [
          <Switch.Checkbox key={1} name='checkbox-uncontrolled' value focus>
            This is an uncontrolled checkbox switch
          </Switch.Checkbox>
        ],

        'With legal size text': <Switch.Checkbox name='checkbox-legal' legal>
          This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines
        </Switch.Checkbox>,

        Disabled: <Switch.Checkbox name='checkbox-disabled' disabled>
          Disabled checkbox
        </Switch.Checkbox>,

        'With error': <Switch.Checkbox name='checkbox-error' error>
          Checkbox with error
        </Switch.Checkbox>,

        'With customizations': [
          <Switch.Checkbox
            key={1}
            name='checkbox-dynamic-styling-uncontrolled'
            customize={{
              backgroundColor: '#3500C8',
              bulletColor: '#F9FF3C',
              borderColorSelected: '#3500C8',
              textColor: '#3500C8'
            }}>
            This is a dynamically styled, uncontrolled checkbox switch
          </Switch.Checkbox>,

          <Switch.Checkbox
            key={2}
            align='right'
            name='checkbox-dynamic-styling-uncontrolled-right'
            customize={{
              backgroundColor: '#3500C8',
              bulletColor: '#F9FF3C',
              borderColorSelected: '#3500C8',
              textColor: '#3500C8'
            }}>
            This is a dynamically styled, uncontrolled checkbox switch on the right
          </Switch.Checkbox>
        ]
      }
    }
  ]
}
