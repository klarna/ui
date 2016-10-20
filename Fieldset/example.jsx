import React from 'react'
import Fieldset from '../Fieldset'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Fieldset',

  examples: {
    require: 'import Fieldset from \'@klarna/ui/Fieldset\'',
    type: LIVE,

    examples: {
      Regular: <Fieldset
        fields={[
          {
            name: 'firstname',
            label: 'First Name',
            size: '1/2',
            top: true,
            left: true
          },
          {
            name: 'lastname',
            label: 'Last Name',
            size: '1/2',
            top: true,
            right: true
          },
          {
            name: 'address',
            label: 'Street address',
            bottom: true
          }
        ]}
        focus='lastname'
        values={{
          firstname: 'Dorothy'
        }}
        onChange={(values) => console.log('new values', values)}
      />,

      Uncontrolled: <Fieldset
        autoFocus='address'
        fields={[
          {
            name: 'firstname',
            label: 'First Name',
            size: '1/2',
            top: true,
            left: true
          },
          {
            name: 'lastname',
            label: 'Last Name',
            size: '1/2',
            top: true,
            right: true
          },
          {
            name: 'address',
            label: 'Street address',
            bottom: true
          }
        ]}
        defaultValues={{
          firstname: 'Thomas'
        }}
        onChange={(values) => console.log('new values', values)}
      />,

      'Using Input': <Fieldset
        autoFocus='address'
        fields={[
          {
            name: 'firstname',
            label: 'First Name',
            size: '1/2',
            left: true
          },
          {
            name: 'lastname',
            label: 'Last Name',
            size: '1/2',
            right: true
          },
          {
            name: 'address',
            label: 'Street address'
          }
        ]}
        defaultValues={{
          firstname: 'Thomas'
        }}
        fieldType='input'
        onChange={(values) => console.log('new values', values)}
      />
    }
  }
}
