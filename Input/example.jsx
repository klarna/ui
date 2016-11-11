import React from 'react'
import Input, { icons } from '../Input'
import Fieldset from '../Fieldset'
import { LIVE, LIVE_WIDE, MANUAL } from '../Showroom/variationTypes'
import ReactMaskedInput from 'react-maskedinput'

export default {
  title: 'Input',
  icon: 'Input',

  variations: [
    {
      title: 'Single',
      require: 'import Input from \'@klarna/ui/Input\'',
      type: LIVE,

      examples: {
        Regular: <Input label='Enter your email' />,
        Controlled: <Input
          name='input-controlled'
          label='Enter your email'
          value='someone@example.com'
          focus
                    />,
        Big: <Input label='Enter your email' big />,
        Giant: <Input label='Enter your email' giant />,
        'Fake focused': <Input label='Enter your email' focus='fake' />,
        Disabled: <Input disabled label='Address' defaultValue='16, Corn street' />,
        'Exclude Mouseflow': <Input
          mouseflowExclude
          label='Address'
          defaultValue='16, Corn street'
        />,
        'With error': <Input label='Invalid email' error defaultValue='invalid@' />,
        'With warning': <Input
          label='Are you sure the domain is exanple?'
          warning
          defaultValue='email@exanple.com'
        />
      }
    },

    {
      title: 'Override',
      require: `import Input from '@klarna/ui/Input'
import ReactMaskedInput from 'react-maskedinput'`,
      type: MANUAL,

      examples: {
        'Masked credit card input': {
          live: <Input
            label='Credit card number'
            Input={ReactMaskedInput}
            mask='1111 1111 1111 1111'
            placeholder=' '
          />,
          code: `<Input
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
      require: `import Input from '@klarna/ui/Input'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE,

      examples: {
        Regular: [
          <Fieldset margins key={0}>
            <Input
              name='icon-card'
              icon={icons.BANK}
              label='Please enter your bank account number' />
          </Fieldset>,
          <Fieldset margins key={1}>
            <Input
              name='icon-card'
              icon={icons.CARD}
              label='Please enter your credit card number' />
          </Fieldset>,
          <Fieldset margins key={2}>
            <Input
              name='icon-calendar'
              icon={icons.CALENDAR}
              label='Date of Birth' />
          </Fieldset>,
          <Fieldset margins key={3}>
            <Input
              name='icon-lock'
              icon={icons.LOCK}
              type='password'
              label='Password' />
          </Fieldset>,
          <Fieldset margins key={4}>
            <Input
              name='icon-person'
              icon={icons.PERSON}
              label='Enter your user name' />
          </Fieldset>,
          <Fieldset margins key={5}>
            <Input
              name='icon-email'
              icon={icons.EMAIL}
              label='Enter your email address' />
          </Fieldset>,
          <Fieldset margins key={6}>
            <Input
              name='icon-phone'
              icon={icons.PHONE}
              label='Mobile number' />
          </Fieldset>,
          <Fieldset margins key={7}>
            <Input
              name='icon-close'
              icon={icons.CLOSE}
              label='Enter an incorrect value (?)' />
          </Fieldset>,
          <Fieldset margins key={8}>
            <Input
              name='icon-question'
              icon={icons.QUESTION}
              label='Are we sure about these being field icons?' />
          </Fieldset>,
          <Fieldset margins key={9}>
            <Input
              name='icon-check'
              icon={icons.CHECK}
              label='These look like button icons really' />
          </Fieldset>,
          <Fieldset margins key={10}>
            <Input
              name='icon-logout'
              icon={icons.LOGOUT}
              label='Write something to log out' />
          </Fieldset>,
          <Fieldset margins key={11}>
            <Input
              name='icon-search'
              icon={icons.SEARCH}
              label='Write something to search' />
          </Fieldset>,
          <Fieldset margins key={12}>
            <Input
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
      require: `import Input from '@klarna/ui/Input'
import Fieldset from '@klarna/ui/Fieldset'`,
      type: LIVE_WIDE,

      examples: {
        'Two fields': <Fieldset margins>
          <Input left size='1/2' name='two-given-name' label='Given name' />
          <Input right size='1/2' name='two-middle-name' label='Middle name' />
        </Fieldset>,

        'Card like form': <Fieldset margins>
          <Input name='card-number' label='Card number' />
          <Input left size='1/2' name='card-expiration' label='MM / YY' />
          <Input right size='1/2' name='card-ccv' label='CCV' />
        </Fieldset>,

        Many: <Fieldset margins>
          <Input left size='1/2' name='many-given-name' label='Given name' />
          <Input center size='1/4' name='many-middle-name' label='Middle name' />
          <Input right size='1/4' name='many-last-name' label='Last name' />
          <Input left size='1/5' name='many-number' label='Number' />
          <Input right size='4/5' name='many-street-address' label='Street Address' />
          <Input left size='1/3' name='many-pokemon' label='Your favorite pokémon' />
          <Input right size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' />
          <Input left size='2/5' name='many-date-of-birth' label='Date of Birth' />
          <Input right size='3/5' name='many-mobile-phone-number' label='Mobile phone number' />
        </Fieldset>
      }
    }
  ]
}
