import React from 'react'
import { Title, Subtitle } from '../Text'
import Code from '../Code'
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
  Regular: (
    <Dropdown label='Lorem ipsum' options={options} />
  ),
  Uncontrolled: (
    <UncontrolledDropdown
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
  )
}

const Stacked = {
  title: 'Stacked',
  Many: (
    <Fieldset>
      <UncontrolledDropdown
        top left size='1/2' label='Given name' options={options} />
      <UncontrolledDropdown
        center size='1/4' label='Middle name' options={options} />
      <UncontrolledDropdown
        top right size='1/4' label='Last name' options={options} />
      <UncontrolledDropdown
        left square size='1/5' label='Number' options={options} />
      <UncontrolledDropdown
        right square size='4/5' label='Street Address' options={options} />
      <UncontrolledDropdown
        left square size='1/3' label='Your favorite pokémon' options={options} />
      <UncontrolledDropdown
        right square size='2/3' label='Android or iPhone: please explain' options={options} />
      <UncontrolledDropdown
        left bottom size='2/5' label='Date of Birth' options={options} />
      <UncontrolledDropdown
        right bottom size='3/5' label='Mobile phone number' options={options} />
    </Fieldset>
  )
}

export default {
  title: 'Dropdown',
  variations: [Single, Stacked]
}

// export default function Dropdowns () {
//
//   return (
//     <div>
//
//       <Title.Secondary margins>Loading</Title.Secondary>
//       <Code>
//         <Dropdown label='Wait...' loading options={options} />
//       </Code>
//
//       <Subtitle margins>With Selected Value</Subtitle>
//       <Code>
//         <Dropdown label='Wait...' loading options={options} value={2} />
//       </Code>
//
//       <Title.Secondary margins>Disabled</Title.Secondary>
//       <Code>
//         <Dropdown disabled label='Disabled' options={options} />
//       </Code>
//
//       <Subtitle margins>With Selected Value</Subtitle>
//       <Code>
//         <Dropdown disabled label='Disabled' options={options} value={2} />
//       </Code>
//
//       <Title.Secondary margins>Error</Title.Secondary>
//       <Code>
//         <Dropdown label='Something went wrong' error options={options} />
//       </Code>
//
//       <Subtitle margins>With Selected Value</Subtitle>
//       <Code>
//         <Dropdown label='Something went wrong' error options={options} value={2} />
//       </Code>
//
//       <Title.Secondary margins>Warning</Title.Secondary>
//       <Code>
//         <Dropdown label='Something is incorect' warning options={options} />
//       </Code>
//
//       <Subtitle margins>With Selected Value</Subtitle>
//       <Code>
//         <Dropdown label='Something is incorect' warning options={options} value={2} />
//       </Code>
//
//       <Title.Secondary margins>Layouts</Title.Secondary>
//       <Subtitle margins>Simple</Subtitle>
//       <Code>
//         <Fieldset>
//           <Dropdown size='1/2' left label='Lorem ipsum' options={options} />
//           <Dropdown size='1/2' right label='Lorem ipsum' options={options} value={2} />
//         </Fieldset>
//       </Code>
//
//       <Subtitle margins>Complex</Subtitle>
//       <Code>
//
//       </Code>
//
//       <Subtitle margins>No options</Subtitle>
//       <Code>
//         <Dropdown label='No options really' />
//       </Code>
//     </div>
//   )
// }
