import React from 'react'
import Dropdown from '../Dropdown'
import Fieldset from '../Fieldset'
import { LIVE, LIVE_WIDE } from '../Showroom/variationTypes'

const options = [
  { key: '', label: 'Pick one!', disabled: true, hidden: true },
  { key: 'lorem', label: 'Lorem' },
  { key: 'ipsum', label: 'Ipsum' }
]

export default {
  title: 'Dropdown',
  icon: 'Dropdown',
  variations: [
    {
      title: 'Single',
      require: 'import Dropdown from \'@klarna/ui/Dropdown\'',
      type: LIVE,

      examples: {
        Regular: <Dropdown
          label='Lorem ipsum'
          options={options}
                 />,

        Controlled: <Dropdown
          name='dropdown-lorem-ipsum'
          label='Lorem ipsum'
          options={options}
          focus
          value='lorem'
                    />,

        'With fake focus': <Dropdown
          focus='fake'
          label='Lorem ipsum'
          options={options}
                           />,

        Loading: <Dropdown
          label='Wait...'
          loading
          options={options}
                 />,

        Disabled: <Dropdown
          disabled
          label='Disabled'
          options={options}
                  />,

        'Exclude Mouseflow': <Dropdown
          mouseflowExclude
          label='Disabled'
          value='lorem'
          options={options}
                             />,

        'With error': <Dropdown
          label='Something went wrong'
          error
          options={options}
                      />,

        'With warning': <Dropdown
          label='Something is incorect'
          warning
          options={options}
                        />
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
            left size='1/2' name='dropdown-given-name' label='Given name' options={options} />
          <Dropdown
            right size='1/2' name='dropdown-last-name' label='Middle name' options={options} />
        </Fieldset>,

        Many: <Fieldset>
          <Dropdown
            top left size='1/2' name='many-given-name' label='Given name' options={options} />
          <Dropdown
            center size='1/4' name='many-middle-name' label='Middle name' options={options} />
          <Dropdown
            top right size='1/4' name='many-last-name' label='Last name' options={options} />
          <Dropdown
            left square size='1/5' name='many-number' label='Number' options={options} />
          <Dropdown
            right square size='4/5' name='many-street-address' label='Street Address' options={options} />
          <Dropdown
            left square size='1/3' name='many-pokemon' label='Your favorite pokémon' options={options} />
          <Dropdown
            right square size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' options={options} />
          <Dropdown
            left bottom size='2/5' name='many-date-of-birth' label='Date of Birth' options={options} />
          <Dropdown
            right bottom size='3/5' name='many-mobile-phone-number' label='Mobile phone number' options={options} />
        </Fieldset>
      }
    }
  ]
}
