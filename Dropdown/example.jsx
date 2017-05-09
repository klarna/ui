import React from 'react'
import Dropdown from '../Dropdown'
import Fieldset from '../Fieldset'
import { LIVE_WIDE, MANUAL } from '../Showroom/variationTypes'

const options = [
  { key: '', label: 'Pick one!', disabled: true, hidden: true },
  { key: 'lorem', label: 'Lorem sit amet' },
  { key: 'ipsum', label: 'Ipsum' }
]

export default {
  title: 'Dropdown',
  icon: 'Dropdown',
  variations: [
    {
      title: 'Single',
      require: `import Dropdown from '@klarna/ui/Dropdown'`,
      type: MANUAL,

      examples: {
        Regular: {
          live: <Dropdown
            label='Lorem ipsum'
            options={options}
          />,
          code:
`<Dropdown
  label='Lorem ipsum'
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
/>`
        },

        Controlled: {
          live: <Dropdown
            label='Lorem ipsum'
            options={options}
            focus={false}
            value='lorem'
          />,
          code:
`<Dropdown
  label='Lorem ipsum'
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
  focus={false}
  value='lorem'
/>`
        },

        'Selected without label': {
          live: <Dropdown
            options={options}
            value='ipsum'
          />,
          code:
`<Dropdown
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
  value='ipsum'
/>`
        },

        'With name': {
          live: <Dropdown
            label='Lorem ipsum'
            name='dolor-sit-amet'
            options={options}
          />,
          code:
`<Dropdown
  label='Lorem ipsum'
  name='dolor-sit-amet'
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
/>`
        },

        Loading: {
          live: <Dropdown
            label='Wait...'
            loading
            options={options}
          />,
          code:
`<Dropdown
  label='Wait...'
  loading
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
/>`
        },

        Disabled: {
          live: <Dropdown
            disabled
            label='Disabled'
            options={options}
          />,
          code:
`<Dropdown
  disabled
  label='Disabled'
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
/>`
        },

        'Disabled with Tooltip': {
          live: <Dropdown
            arrow='bottom-right'
            disabled
            fieldTooltip='This dropdown is disabled'
            label='Disabled'
            options={options}
          />,
          code:
`<Dropdown
  arrow='bottom-right'
  disabled
  fieldTooltip='This dropdown is disabled'
  label='Disabled'
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
/>`
        },

        'Exclude Mouseflow': {
          live: <Dropdown
            mouseflowExclude
            label='Disabled'
            value='lorem'
            options={options}
          />,
          code:
`<Dropdown
  mouseflowExclude
  label='Disabled'
  value='lorem'
  options={options}
/>,`
        },

        'With error': {
          live: <Dropdown
            label='Something went wrong'
            error
            options={options}
          />,
          code:
`<Dropdown
  label='Something went wrong'
  error
  options={options}
/>,`
        },

        'With warning': {
          live: <Dropdown
            label='Something is incorect'
            warning
            options={options}
          />,
          code:
`<Dropdown
  label='Something is incorect'
  warning
  options={[
    { key: '', label: 'Pick one!', disabled: true, hidden: true },
    { key: 'lorem', label: 'Lorem sit amet' },
    { key: 'ipsum', label: 'Ipsum' }
  ]}
/>`
        }
      }
    },

    {
      title: 'Stacked',
      require: `import Dropdown from '@klarna/ui/Dropdown'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE_WIDE,

      examples: {
        'Two fields': <Fieldset>
          <Dropdown
            left size='1/2'
            label='Given name'
            options={options}
          />
          <Dropdown
            right size='1/2'
            label='Middle name'
            options={options}
          />
        </Fieldset>,

        Many: <Fieldset>
          <Dropdown
            top left size='1/2'
            label='Given name'
            options={options}
          />
          <Dropdown
            center size='1/4'
            label='Middle name'
            options={options}
          />
          <Dropdown
            top right size='1/4'
            label='Last name'
            options={options}
          />
          <Dropdown
            left square size='1/5'
            label='Number'
            options={options}
          />
          <Dropdown
            right square size='4/5'
            label='Street Address'
            options={options}
          />
          <Dropdown
            left square size='1/3'
            label='Your favorite pokémon'
            options={options}
          />
          <Dropdown
            right square size='2/3'
            label='Android or iPhone: please explain'
            options={options}
          />
          <Dropdown
            left bottom size='2/5'
            label='Date of Birth'
            options={options}
          />
          <Dropdown
            right bottom size='3/5'
            label='Mobile phone number'
            options={options}
          />
        </Fieldset>
      }
    }
  ]
}
