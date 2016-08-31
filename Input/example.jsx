import React from 'react'
import Input from '../Input'
import UncontrolledInput from '../uncontrolled/Input'
import Fieldset from '../Fieldset'

export default {
  title: 'Input',
  variations: [{
    title: 'Single',
    Regular: [
      <Input label='Enter your email' />
    ],
    Uncontrolled: [
      <UncontrolledInput label='Enter your email'/>
    ],
    Big: [
      <Input label='Enter your email' big />
    ],
    Giant: [
      <Input label='Enter your email' giant />
    ],
    Focused: [
      <Input label='Enter your email' focus />
    ],
    'Fake focused': [
      <Input label='Enter your email' focus='fake' />
    ],
    Disabled: [
      <Input disabled label='Address' value='16, Corn street' />
    ],
    'With error': [
      <Input label='Invalid email' error value='invalid@' />
    ],
    'With warning': [
      <Input label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
    ]
  }, {
    title: 'With Icons',
    Regular: [
      <Fieldset margins>
        <UncontrolledInput
          icon='card'
          label='Please enter your credit card number' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='calendar'
          label='Date of Birth' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='lock'
          type='password'
          label='Password' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='person'
          label='Enter your user name' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='email'
          label='Enter your email address' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='phone'
          label='Mobile number' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='close'
          label='Enter an incorrect value (?)' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='question'
          label='Are we sure about these being field icons?' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='check'
          label='These look like button icons really' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          icon='logout'
          label='Write something to log out' />
      </Fieldset>,
      <Fieldset margins>
        <UncontrolledInput
          giant
          icon='phone'
          label='Line number' />
      </Fieldset>
    ]
  }, {
    title: 'Stacked',
    'Two fields': {
      example: [
        <Fieldset margins>
          <UncontrolledInput left size='1/2' label='Given name' />
          <UncontrolledInput right size='1/2' label='Middle name' />
        </Fieldset>
      ],
      wide: true
    },
    'Card like form': {
      example: [
        <Fieldset margins>
          <UncontrolledInput label='Card number' />
          <UncontrolledInput left size='1/2' label='MM / YY' />
          <UncontrolledInput right size='1/2' label='CCV' />
        </Fieldset>
      ],
      wide: true
    },
    Many: {
      example: [
        <Fieldset margins>
          <UncontrolledInput left size='1/2' label='Given name' />
          <UncontrolledInput center size='1/4' label='Middle name' />
          <UncontrolledInput right size='1/4' label='Last name' />
          <UncontrolledInput left size='1/5' label='Number' />
          <UncontrolledInput right size='4/5' label='Street Address' />
          <UncontrolledInput left size='1/3' label='Your favorite pokémon' />
          <UncontrolledInput right size='2/3' label='Android or iPhone: please explain' />
          <UncontrolledInput left size='2/5' label='Date of Birth' />
          <UncontrolledInput right size='3/5' label='Mobile phone number' />
        </Fieldset>
      ],
      wide: true
    }
  }]
}
