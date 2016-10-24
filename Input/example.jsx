import React from 'react'
import Input, { icons } from '../Input'
import UncontrolledInput from '../uncontrolled/Input'
import Fieldset from '../Fieldset'
import { LIVE, LIVE_WIDE, MANUAL } from '../Showroom/variationTypes'
import ReactMaskedInput from 'react-maskedinput'

export default {
  title: 'Input',
  icon: 'Input',

  variations: [
    {
      title: 'Single',
      require: `import Input from '@klarna/ui/Input'
import UncontrolledInput from '@klarna/ui/uncontrolled/Input'`,
      type: LIVE,

      examples: {
        Regular: <Input label='Enter your email' />,
        Uncontrolled: <UncontrolledInput
          name='input-uncontrolled'
          label='Enter your email'
        />,
        Big: <Input label='Enter your email' big />,
        Giant: <Input label='Enter your email' giant />,
        Focused: <Input label='Enter your email' focus />,
        'Fake focused': <Input label='Enter your email' focus='fake' />,
        Disabled: <Input disabled label='Address' value='16, Corn street' />,
        'Exclude Mouseflow': <Input
          mouseflowExclude
          label='Address'
          value='16, Corn street'
        />,
        'With error': <Input label='Invalid email' error value='invalid@' />,
        'With warning': <Input
          label='Are you sure the domain is exanple?'
          warning
          value='email@exanple.com'
        />
      }
    },

    {
      title: 'Override',
      require: `import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import ReactMaskedInput from 'react-maskedinput'`,
      type: MANUAL,

      examples: {
        'Masked credit card input': {
          live: <UncontrolledInput
            label='Credit card number'
            Input={ReactMaskedInput}
            mask='1111 1111 1111 1111'
            placeholder=' '
          />,
          code: `<UncontrolledInput
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
      require: `import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE,

      examples: {
        Regular: [
          <Fieldset margins key={0}>
            <UncontrolledInput
              name='icon-card'
              icon={icons.BANK}
              label='Please enter your bank account number' />
          </Fieldset>,
          <Fieldset margins key={0}>
            <UncontrolledInput
              name='icon-card'
              icon={icons.CARD}
              label='Please enter your credit card number' />
          </Fieldset>,
          <Fieldset margins key={1}>
            <UncontrolledInput
              name='icon-calendar'
              icon={icons.CALENDAR}
              label='Date of Birth' />
          </Fieldset>,
          <Fieldset margins key={2}>
            <UncontrolledInput
              name='icon-lock'
              icon={icons.LOCK}
              type='password'
              label='Password' />
          </Fieldset>,
          <Fieldset margins key={3}>
            <UncontrolledInput
              name='icon-person'
              icon={icons.PERSON}
              label='Enter your user name' />
          </Fieldset>,
          <Fieldset margins key={4}>
            <UncontrolledInput
              name='icon-email'
              icon={icons.EMAIL}
              label='Enter your email address' />
          </Fieldset>,
          <Fieldset margins key={5}>
            <UncontrolledInput
              name='icon-phone'
              icon={icons.PHONE}
              label='Mobile number' />
          </Fieldset>,
          <Fieldset margins key={6}>
            <UncontrolledInput
              name='icon-close'
              icon={icons.CLOSE}
              label='Enter an incorrect value (?)' />
          </Fieldset>,
          <Fieldset margins key={7}>
            <UncontrolledInput
              name='icon-question'
              icon={icons.QUESTION}
              label='Are we sure about these being field icons?' />
          </Fieldset>,
          <Fieldset margins key={8}>
            <UncontrolledInput
              name='icon-check'
              icon={icons.CHECK}
              label='These look like button icons really' />
          </Fieldset>,
          <Fieldset margins key={9}>
            <UncontrolledInput
              name='icon-logout'
              icon={icons.LOGOUT}
              label='Write something to log out' />
          </Fieldset>,
          <Fieldset margins key={10}>
            <UncontrolledInput
              name='icon-search'
              icon={icons.SEARCH}
              label='Write something to search' />
          </Fieldset>,
          <Fieldset margins>
            <UncontrolledInput
              name='icon-giant'
              giant
              icon={icons.PHONE}
              label='Line number' />
          </Fieldset>
        ]
      }
    },

    {
      title: 'Stacked',
      require: `import UncontrolledInput from '@klarna/ui/uncontrolled/Input'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE_WIDE,

      examples: {
        'Two fields': <Fieldset margins>
          <UncontrolledInput left size='1/2' name='two-given-name' label='Given name' />
          <UncontrolledInput right size='1/2' name='two-middle-name' label='Middle name' />
        </Fieldset>,

        'Card like form': <Fieldset margins>
          <UncontrolledInput name='card-number' label='Card number' />
          <UncontrolledInput left size='1/2' name='card-expiration' label='MM / YY' />
          <UncontrolledInput right size='1/2' name='card-ccv' label='CCV' />
        </Fieldset>,

        Many: <Fieldset margins>
          <UncontrolledInput left size='1/2' name='many-given-name' label='Given name' />
          <UncontrolledInput center size='1/4' name='many-middle-name' label='Middle name' />
          <UncontrolledInput right size='1/4' name='many-last-name' label='Last name' />
          <UncontrolledInput left size='1/5' name='many-number' label='Number' />
          <UncontrolledInput right size='4/5' name='many-street-address' label='Street Address' />
          <UncontrolledInput left size='1/3' name='many-pokemon' label='Your favorite pokémon' />
          <UncontrolledInput right size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' />
          <UncontrolledInput left size='2/5' name='many-date-of-birth' label='Date of Birth' />
          <UncontrolledInput right size='3/5' name='many-mobile-phone-number' label='Mobile phone number' />
        </Fieldset>
      }
    }
  ]
}
