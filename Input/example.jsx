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
          label='Enter your email'
          value='someone@example.com'
          focus
        />,

        Big: <Input label='Enter your email' big />,

        Giant: <Input label='Enter your email' giant />,

        'With name': <Input label='Enter your email' name='email' />,

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
              icon={icons.BANK}
              label='Please enter your bank account number' />
          </Fieldset>,
          <Fieldset margins key={1}>
            <Input
              icon={icons.CARD}
              label='Please enter your credit card number' />
          </Fieldset>,
          <Fieldset margins key={2}>
            <Input
              icon={icons.CALENDAR}
              label='Date of Birth' />
          </Fieldset>,
          <Fieldset margins key={3}>
            <Input
              icon={icons.LOCK}
              type='password'
              label='Password' />
          </Fieldset>,
          <Fieldset margins key={4}>
            <Input
              icon={icons.PERSON}
              label='Enter your user name' />
          </Fieldset>,
          <Fieldset margins key={5}>
            <Input
              icon={icons.EMAIL}
              label='Enter your email address' />
          </Fieldset>,
          <Fieldset margins key={6}>
            <Input
              icon={icons.PHONE}
              label='Mobile number' />
          </Fieldset>,
          <Fieldset margins key={7}>
            <Input
              icon={icons.CLOSE}
              label='Enter an incorrect value (?)' />
          </Fieldset>,
          <Fieldset margins key={8}>
            <Input
              icon={icons.QUESTION}
              label='Are we sure about these being field icons?' />
          </Fieldset>,
          <Fieldset margins key={9}>
            <Input
              icon={icons.CHECK}
              label='These look like button icons really' />
          </Fieldset>,
          <Fieldset margins key={10}>
            <Input
              icon={icons.LOGOUT}
              label='Write something to log out' />
          </Fieldset>,
          <Fieldset margins key={11}>
            <Input
              icon={icons.SEARCH}
              label='Write something to search' />
          </Fieldset>,
          <Fieldset margins key={12}>
            <Input
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
          <Input left size='1/2' label='Given name' />
          <Input right size='1/2' label='Middle name' />
        </Fieldset>,

        'Card like form': <Fieldset margins>
          <Input label='Card number' />
          <Input left size='1/2' label='MM / YY' />
          <Input right size='1/2' label='CCV' />
        </Fieldset>,

        Many: <Fieldset margins>
          <Input left size='1/2' label='Given name' />
          <Input center size='1/4' label='Middle name' />
          <Input right size='1/4' label='Last name' />
          <Input left size='1/5' label='Number' />
          <Input right size='4/5' label='Street Address' />
          <Input left size='1/3' label='Your favorite pokémon' />
          <Input right size='2/3' label='Android or iPhone: please explain' />
          <Input left size='2/5' label='Date of Birth' />
          <Input right size='3/5' label='Mobile phone number' />
        </Fieldset>
      }
    }
  ]
}
