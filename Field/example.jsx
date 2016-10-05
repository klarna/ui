import React from 'react'
import Field, { icons } from '../Field'
import Fieldset from '../Fieldset'
import UncontrolledField from '../uncontrolled/Field'
import { LIVE, LIVE_WIDE } from '../Showroom/variationTypes'

export default {
  title: 'Field',
  icon: 'Field',

  variations: [
    {
      title: 'Single',
      require: `import Field from '@klarna/ui/Field'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'`,
      type: LIVE,

      examples: {
        Regular: <Field label='Enter your email' />,

        Uncontrolled: <UncontrolledField
          name='field-uncontrolled'
          label='Enter your email'
        />,

        'With value': <Field
          label='Enter your email'
          value='jane@doe.com'
        />,

        Big: <Field label='Enter your email' big />,

        'With focus': <Field label='Enter your email' focus />,

        'With fake focus': <Field label='Enter your email' focus='fake' />,

        Disabled: <Field disabled label='Address' value='16, Corn street' />,

        'Exclude Mouseflow': <Field
          mouseflowExclude
          label='Address'
          value='16, Corn street'
        />,

        'With error': <Field label='Invalid email' error value='invalid@' />,

        'With warning': <Field
          label='Are you sure the domain is exanple?'
          warning
          value='email@exanple.com'
        />,

        'With customizations': <UncontrolledField
          name='with-customizations'
          customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8' }}
          label='Favorite color'
          value='Purple'
        />
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
              icon={icons.DETAILS}
              label='This is for writing some details here' />
          </Fieldset>
        </div>
      }
    },

    {
      title: 'Stacked',
      require: `import UncontrolledField from '@klarna/ui/uncontrolled/Field'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE_WIDE,

      examples: {
        'Two fields': <Fieldset margins>
          <UncontrolledField left size='1/2' name='two-given-name' label='Given name' />
          <UncontrolledField right size='1/2' name='two-middle-name' label='Middle name' />
        </Fieldset>,

        Many: <Fieldset margins>
          <UncontrolledField top left size='1/2' name='many-given-name' label='Given name' />
          <UncontrolledField center size='1/4' name='many-middle-name' label='Middle name' />
          <UncontrolledField top right size='1/4' name='many-last-name' label='Last name' />
          <UncontrolledField left square size='1/5' name='many-number' label='Number' />
          <UncontrolledField right square size='4/5' name='many-street-address' label='Street Address' />
          <UncontrolledField left square size='1/3' name='many-pokemon' label='Your favorite pokémon' />
          <UncontrolledField right square size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' />
          <UncontrolledField left bottom size='2/5' name='many-date-of-birth' label='Date of Birth' />
          <UncontrolledField right bottom size='3/5' name='many-mobile-phone-number' label='Mobile phone number' />
        </Fieldset>
      }
    }
  ]
}
