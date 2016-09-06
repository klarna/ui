/* global alert */
import React from 'react'
import Radio from '../Radio'
import UncontrolledRadio from '../uncontrolled/Radio'

const options = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

export default {
  title: 'Radio',
  variations: [{
    title: 'Radio',
    require: `import Radio from '@klarna/ui/Radio'
import UncontrolledRadio from '@klarna/ui/uncontrolled/Radio'`,
    Regular: [
      <Radio
        onChange={(key) => alert(key)}
        name='radio-regular'
        options={options}
        value='lorem'
      />
    ],
    Uncontrolled: [
      <UncontrolledRadio
        name='radio-uncontrolled'
        options={options}
      />
    ],
    Borderless: [
      <Radio
        borderless
        name='radio-borderless'
        onChange={(key) => alert(key)}
        options={options}
        value='lorem'
      />
    ],
    'Borderless uncontrolled': [
      <UncontrolledRadio
        borderless
        name='radio-borderless-uncontrolled'
        options={options}
      />
    ],
    Disabled: [
      <UncontrolledRadio
        disabled
        name='radio-disabled'
        onChange={(key) => alert(key)}
        options={options}
        value='lorem'
      />
    ],
    'Borderless and disabled': [
      <UncontrolledRadio
        borderless
        disabled
        name='radio-borderless-disabled'
        options={options}
        value='lorem'
      />
    ],
    'With focus': [
      <Radio
        focus='sit'
        name='radio-focus'
        options={options}
        value='ipsum'
      />
    ]
  }]
}
