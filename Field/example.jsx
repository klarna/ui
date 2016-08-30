import React from 'react'
import Field from '../Field'
import Fieldset from '../Fieldset'
import UncontrolledField from '../uncontrolled/Field'

const Single = {
  title: 'Single',
  Regular: (
    <Field label='Enter your email' />
  ),

  Uncontrolled: (
    <UncontrolledField label='Enter your email' />
  ),

  'With value': (
    <Field label='Enter your email' value='jane@doe.com' />
  ),

  Big: (
    <Field label='Enter your email' big />
  ),

  'With focus': (
    <Field label='Enter your email' focus />
  ),

  'With fake focus': (
    <Field label='Enter your email' focus='fake' />
  ),

  Disabled: (
    <Field disabled label='Address' value='16, Corn street' />
  ),

  'With error': (
    <Field label='Invalid email' error value='invalid@' />
  ),

  'With warning': (
    <Field label='Are you sure the domain is exanple?' warning value='email@exanple.com' />
  ),

  'With customizations': (
    <UncontrolledField customize={{ borderColor: '#3500C8', borderColorSelected: '#3500C8' }} label='Favorite color' value='Purple' />
  )
}

const WithIcons = {
  title: 'With Icons',
  Regular: (
    <div>
      <Fieldset margins>
        <Field
          icon='card'
          label='Please enter your credit card number' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='calendar'
          label='Date of Birth' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='lock'
          type='password'
          label='Password' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='person'
          label='Enter your user name' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='email'
          label='Enter your email address' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='phone'
          label='Mobile number' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='close'
          label='Enter an incorrect value (?)' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='question'
          label='Are we sure about these being field icons?' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='check'
          label='These look like button icons really' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='logout'
          label='Write something to log out' />
      </Fieldset>
      <Fieldset margins>
        <Field
          icon='details'
          label='This is for writing some details here' />
      </Fieldset>
    </div>
  )
}

const Stacked = {
  title: 'Stacked',
  'Two fields': {
    example: (
      <Fieldset margins>
        <UncontrolledField left size='1/2' label='Given name' />
        <UncontrolledField right size='1/2' label='Middle name' />
      </Fieldset>
    ),
    wide: true
  },
  Many: {
    example: (
      <Fieldset margins>
        <UncontrolledField top left size='1/2' label='Given name' />
        <UncontrolledField center size='1/4' label='Middle name' />
        <UncontrolledField top right size='1/4' label='Last name' />
        <UncontrolledField left square size='1/5' label='Number' />
        <UncontrolledField right square size='4/5' label='Street Address' />
        <UncontrolledField left square size='1/3' label='Your favorite pokémon' />
        <UncontrolledField right square size='2/3' label='Android or iPhone: please explain' />
        <UncontrolledField left bottom size='2/5' label='Date of Birth' />
        <UncontrolledField right bottom size='3/5' label='Mobile phone number' />
      </Fieldset>
    ),
    wide: true
  }
}

export default {
  title: 'Field',
  variations: [Single, WithIcons, Stacked]
}
