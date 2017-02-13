import React from 'react'
import Fieldset from '../Fieldset'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'Fieldset',

  examples: {
    require: `import Fieldset from '@klarna/ui/Fieldset'`,
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
        autoFocus='lastname'
        defaultValues={{
          firstname: 'Dorothy'
        }}
        onChange={(values) => console.log('new values', values)}
               />,

      'Regular with options': <Fieldset
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
            name: 'city',
            label: 'Street address',
            options: [
              {
                key: 'Stockholm',
                label: 'Stockholm'
              },
              {
                key: 'Gothenburg',
                label: 'Gothenburg'
              }
            ],
            bottom: true
          }
        ]}
        defaultValues={{
          firstname: 'Dorothy'
        }}
        onChange={(values) => console.log('new values', values)}
      />,

      Controlled: <Fieldset
        focus='address'
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
        values={{
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
