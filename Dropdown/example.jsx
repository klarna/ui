import React from 'react'
import Dropdown from '../Dropdown'
import UncontrolledDropdown from '../uncontrolled/Dropdown'
import Fieldset from '../Fieldset'

const options = [
  { key: '', label: 'Pick one!', disabled: true, hidden: true },
  { key: 'lorem', label: 'Lorem' },
  { key: 'ipsum', label: 'Ipsum' }
]

const Single = {
  title: 'Single',
  require: `import Dropdown from '@klarna/ui/Dropdown'
import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'`,

  Regular: (
    <Dropdown label='Lorem ipsum' options={options} />
  ),

  Uncontrolled: (
    <UncontrolledDropdown
      name='dropdown-lorem-ipsum'
      label='Lorem ipsum'
      options={options}
    />
  ),

  'With value selected': (
    <Dropdown
      label='Lorem ipsum'
      options={options}
      value='ipsum'
    />
  ),

  'With focus': (
    <Dropdown
      label='Lorem ipsum'
      options={options}
      focus
    />
  ),

  'With fake focus': (
    <Dropdown
      focus='fake'
      label='Lorem ipsum'
      options={options}
    />
  ),

  Loading: (
    <Dropdown label='Wait...' loading options={options} />
  ),

  Disabled: (
    <Dropdown disabled label='Disabled' options={options} />
  ),

  'With error': (
    <Dropdown label='Something went wrong' error options={options} />
  ),

  'With warning': (
    <Dropdown label='Something is incorect' warning options={options} />
  )
}

const Stacked = {
  title: 'Stacked',
  require: `import UncontrolledDropdown from '@klarna/ui/uncontrolled/Dropdown'
import Fieldset from '@klarna/ui/Fieldset'`,
  'Two fields': {
    example: (
      <Fieldset>
        <UncontrolledDropdown
          left size='1/2' name='dropdown-given-name' label='Given name' options={options} />
        <UncontrolledDropdown
          right size='1/2' name='dropdown-last-name' label='Middle name' options={options} />
      </Fieldset>
    ),
    wide: true
  },
  Many: {
    example: (
      <Fieldset>
        <UncontrolledDropdown
          top left size='1/2' name='many-given-name' label='Given name' options={options} />
        <UncontrolledDropdown
          center size='1/4' name='many-middle-name' label='Middle name' options={options} />
        <UncontrolledDropdown
          top right size='1/4' name='many-last-name' label='Last name' options={options} />
        <UncontrolledDropdown
          left square size='1/5' name='many-number' label='Number' options={options} />
        <UncontrolledDropdown
          right square size='4/5' name='many-street-address' label='Street Address' options={options} />
        <UncontrolledDropdown
          left square size='1/3' name='many-pokemon' label='Your favorite pokémon' options={options} />
        <UncontrolledDropdown
          right square size='2/3' name='many-android-iphone' label='Android or iPhone: please explain' options={options} />
        <UncontrolledDropdown
          left bottom size='2/5' name='many-date-of-birth' label='Date of Birth' options={options} />
        <UncontrolledDropdown
          right bottom size='3/5' name='many-mobile-phone-number' label='Mobile phone number' options={options} />
      </Fieldset>
    ),
    wide: true
  }
}

export default {
  title: 'Dropdown',
  icon: 'Dropdown',
  variations: [Single, Stacked]
}
