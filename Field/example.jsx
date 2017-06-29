import React from 'react'
import Field, { icons } from '../Field'
import Fieldset from '../Fieldset'
import ReactMaskedInput from 'react-maskedinput'
import { LIVE, LIVE_WIDE, MANUAL } from '../Showroom/variationTypes'

export default {
  title: 'Field',
  icon: 'Field',

  variations: [
    {
      title: 'Single',
      require: `import Field from '@klarna/ui/Field'`,
      type: MANUAL,

      examples: {
        Regular: {
          live: <Field label='Enter your email' />,
          code: `<Field label='Enter your email' />`
        },

        Controlled: {
          live: <Field
            label='Enter your email'
            value='someone@example.com'
            focus={false}
          />,
          code:
`<Field
  label='Enter your email'
  value='someone@example.com'
  focus={false}
/>`
        },

        Big: {
          live: <Field label='Enter your email' big />,
          code: `<Field label='Enter your email' big />`
        },

        'Pin code variation': {
          live: <Field
            pinCode
            label='Enter your email'
          />,
          code:
`<Field
  pinCode
  label='Enter your email'
/>`
        },

        'With name': {
          live: <Field name='email' label='Enter your email' />,
          code: `<Field name='email' label='Enter your email' />`
        },

        Disabled: {
          live: <Field disabled label='Address' defaultValue='16, Corn street' />,
          code: `<Field disabled label='Address' defaultValue='16, Corn street' />`
        },

        'Has been prefilled': {
          live: <Field
            mouseflowExclude
            label='Address'
            defaultValue='16, Corn street'
            prefilled
          />,
          code:
`<Field
  mouseflowExclude
  label='Address'
  defaultValue='16, Corn street'
  prefilled
/>`
        },

        'Exclude Mouseflow': {
          live: <Field
            mouseflowExclude
            label='Address'
            defaultValue='16, Corn street'
          />,
          code:
`<Field
  mouseflowExclude
  label='Address'
  defaultValue='16, Corn street'
/>`
        },

        'With error': {
          live: <Field label='Invalid email' error defaultValue='invalid@' />,
          code: `<Field label='Invalid email' error defaultValue='invalid@' />`
        },

        'With warning': {
          live: <Field
            label='Are you sure the domain is exanple?'
            warning
            defaultValue='email@exanple.com'
          />,
          code:
`<Field
  label='Are you sure the domain is exanple?'
  warning
  defaultValue='email@exanple.com'
/>`
        },

        'With customizations': {
          live: <Field
            customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8', borderRadius: '15px', inputColor: 'green', labelColor: 'red' }}
            label='Favorite color'
            defaultValue='Purple'
          />,
          code:
`<Field
  customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8', borderRadius: '15px', inputColor: 'green', labelColor: 'red' }}
  label='Favorite color'
  defaultValue='Purple'
/>`
        },

        'With Field link': {
          live: <Field
            label='Date Of Birth'
            fieldLink='Skip'
          />,
          code:
`<Field
  label='Date Of Birth'
  fieldLinkText='Skip'
/>`
        },
        'With Field Tooltip': {
          live: <Field
            arrow='bottom-right'
            disabled
            fieldTooltip='We need your phone number for stuff'
            label='Phone Number'
          />,
          code:
`<Field
  arrow='bottom-right'
  disabled
  fieldTooltip='We need your phone number for stuff'
  label='Date Of Birth'
/>`
        }
      }
    },

    {
      title: 'Override',
      require: `import Field from '@klarna/ui/Field'
import ReactMaskedInput from 'react-maskedinput'`,
      type: MANUAL,

      examples: {
        'Masked credit card field': {
          live: <Field
            label='Credit card number'
            Input={ReactMaskedInput}
            mask='1111 1111 1111 1111'
            placeholder=' '
          />,

          code: `<Field
  label='Credit card number'
  Input={ReactMaskedInput}
  mask='1111 1111 1111 1111'
  placeholder=' '
/>`
        }
      }
    },

    {
      title: 'With Icons',
      require: `import Field from '@klarna/ui/Field'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE,

      examples: {
        Regular: <div>
          <Fieldset margins>
            <Field
              icon={icons.BANK}
              label='Please enter your bank account number' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.CARD}
              label='Please enter your credit card number' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.CALENDAR}
              label='Date of Birth' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.LOCATION}
              type='postal_code'
              label='Zip Code' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.LOCK}
              type='password'
              label='Password' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.PERSON}
              label='Enter your user name' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.EMAIL}
              label='Enter your email address' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.PHONE}
              label='Mobile number' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.CLOSE}
              label='Enter an incorrect value (?)' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.QUESTION}
              label='Are we sure about these being field icons?' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.CHECK}
              label='These look like button icons really' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.LOGOUT}
              label='Write something to log out' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.SEARCH}
              label='Write something to search' />
          </Fieldset>
          <Fieldset margins>
            <Field
              icon={icons.DETAILS}
              label='This is for writing some details here' />
          </Fieldset>
        </div>
      }
    },

    {
      title: 'Stacked',
      require: `import Field from '@klarna/ui/Field'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE_WIDE,

      examples: {
        'Two fields': <Fieldset margins>
          <Field left size='1/2' label='Given name' />
          <Field right size='1/2' label='Middle name' />
        </Fieldset>,

        Many: <Fieldset margins>
          <Field top left size='1/2' label='Given name' />
          <Field center size='1/4' label='Middle name' fieldTooltip='This field is optional' arrow='top-right' />
          <Field top right size='1/4' label='Last name' />
          <Field left square size='1/5' label='Number' />
          <Field right square size='4/5' label='Street Address' />
          <Field left square size='1/3' label='Your favorite pokémon' />
          <Field right square size='2/3' label='Android or iPhone: please explain' />
          <Field left bottom size='2/5' label='Date of Birth' />
          <Field right bottom size='3/5' label='Mobile phone number' fieldTooltip='Please submit your number in case we need to contact you' arrow='bottom-right' />
        </Fieldset>
      }
    }
  ]
}
