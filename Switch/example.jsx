import React from 'react'
import * as Switch from '../Switch'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Switch',
  icon: 'Switch',

  variations: [
    {
      title: 'Toggle',
      require: `import * as Switch from '@klarna/ui/Switch'`,
      type: LIVE,

      examples: {
        Regular: [
          <Switch.Toggle key={1}>
            This is a toggle switch
          </Switch.Toggle>,

          <Switch.Toggle key={2} defaultValue>
            This is a toggle switch checked
          </Switch.Toggle>
        ],

        Controlled: [
          <Switch.Toggle
            key={1}
            focus
            name='toggle'
            value={false}>
            This is an controlled toggle switch checked
          </Switch.Toggle>
        ],

        'With legal size text': <Switch.Toggle legal>
          This is a toggle switch with legal size text that usually will fold into multiple lines
        </Switch.Toggle>,

        Disabled: [
          <Switch.Toggle key={1} disabled>
            This is a toggle switch disabled
          </Switch.Toggle>,

          <Switch.Toggle
            key={2} disabled defaultValue>
            This is a toggle switch checked and disabled
          </Switch.Toggle>
        ],

        'With error': <Switch.Toggle error>
          This is a toggle switch in an error state
        </Switch.Toggle>,

        'With customizations': [
          <Switch.Toggle
            key={1}
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
      require: `import * as Switch from '@klarna/ui/Switch'`,
      type: LIVE,

      examples: {
        Regular: [
          <Switch.Checkbox key={1}>
            This is a toggle switch with checkbox design
          </Switch.Checkbox>,

          <Switch.Checkbox key={2} defaultValue>
            This is a toggle switch with checkbox design
          </Switch.Checkbox>
        ],

        Controlled: [
          <Switch.Checkbox key={1} name='checkbox' value focus>
            This is a controlled checkbox switch
          </Switch.Checkbox>
        ],

        'With legal size text': <Switch.Checkbox legal>
          This is a toggle switch with checkbox design and legal size text that usually will fold into multiple lines
        </Switch.Checkbox>,

        Disabled: <Switch.Checkbox disabled>
          Disabled checkbox
        </Switch.Checkbox>,

        Partial: <Switch.Checkbox defaultValue partial>
          Partially checked
        </Switch.Checkbox>,

        'With error': <Switch.Checkbox error>
          Checkbox with error
        </Switch.Checkbox>,

        'With customizations': [
          <Switch.Checkbox
            key={1}
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
