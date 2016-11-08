import React from 'react'
import Field, { icons } from '../Field'
import * as FieldVariation from '../Field'
import Fieldset from '../Fieldset'
import ReactMaskedInput from 'react-maskedinput'
import { LIVE, LIVE_WIDE, MANUAL } from '../Showroom/variationTypes'

export default {
  title: 'Field',
  icon: 'Field',

  variations: [
    {
      title: 'Single',
      require: 'import Field from \'@klarna/ui/Field\'',
      type: LIVE,

      examples: {
        Regular: <Field label='Enter your email' />,

        Controlled: <Field
          name='field-uncontrolled'
          label='Enter your email'
          value='someone@example.com'
          focus
                    />,

        Big: <Field label='Enter your email' big />,

        'With fake focus': <Field label='Enter your email' focus='fake' />,

        Disabled: <Field disabled label='Address' defaultValue='16, Corn street' />,

        'Exclude Mouseflow': <Field
          mouseflowExclude
          label='Address'
          defaultValue='16, Corn street'
                             />,

        'With error': <Field label='Invalid email' error defaultValue='invalid@' />,

        'With warning': <Field
          label='Are you sure the domain is exanple?'
          warning
          defaultValue='email@exanple.com'
                        />,

        'With customizations': <Field
          name='with-customizations'
          customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8', borderRadius: '15px', inputColor: 'green', labelColor: 'red' }}
          label='Favorite color'
          defaultValue='Purple'
                               />
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
          <Field left size='1/2' name='two-given-name' label='Given name' />
          <Field right size='1/2' name='two-middle-name' label='Middle name' />
        </Fieldset>,

        Many: <Fieldset margins>
          <Field top left size='1/2' name='many-given-name' label='Given name' />
          <Field center size='1/4' name='many-middle-name' label='Middle name' />
          <Field top right size='1/4' name='many-last-name' label='Last name' />
          <Field left square size='1/5' name='many-number' label='Number' />
          <Field right square size='4/5' name='many-street-address' label='Street Address' />
          <Field left square size='1/3' name='many-pokemon' label='Your favorite pokémon' />
          <Field right square size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' />
          <Field left bottom size='2/5' name='many-date-of-birth' label='Date of Birth' />
          <Field right bottom size='3/5' name='many-mobile-phone-number' label='Mobile phone number' />
        </Fieldset>
      }
    },

    {
      title: 'PinCode',
      require: 'import * as Field from \'@klarna/ui/Field\'',
      type: LIVE,

      examples: {
        Regular: (
          <FieldVariation.PinCode
            onChange={(value) => console.log(value)}
            defaultValue='3134'
            placeholder='Enter the value'
          />
        ),

        Controlled: (
          <FieldVariation.PinCode
            onChange={(value) => console.log(value)}
            value='312'
          />
        ),

        Error: (
          <FieldVariation.PinCode
            error
            onChange={(value) => console.log(value)}
            defaultValue='3134'
            placeholder='Enter the value'
          />
        ),

        Customized: (
          <FieldVariation.PinCode
            customize={{
              borderColor: 'red',
              borderColorSelected: 'purple',
              borderRadius: '10px',
              inputColor: 'orange'
            }}
            defaultValue='1337'
            placeholder='Enter the value'
          />
        )
      }
    }
  ]
}
