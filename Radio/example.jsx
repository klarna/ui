import React from 'react'
import Radio from '../Radio'
import UncontrolledRadio from '../uncontrolled/Radio'
import { LIVE_WIDE } from '../Showroom/variationTypes'
import Installments from '../Installments'

const options = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

const content = <Installments
  name='installments'
  onChange={(key) => console.log('You selected', key)}
  options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
  value='installments_12'
/>

const optionsWithContent = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur', content: content},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

export default {
  title: 'Radio',

  examples: {
    require: `import Radio from '@klarna/ui/Radio'
import UncontrolledRadio from '@klarna/ui/uncontrolled/Radio'`,
    type: LIVE_WIDE,

    examples: {
      Regular: <Radio
        onChange={(key) => console.log(key)}
        name='radio-regular'
        options={options}
        value='lorem'
      />,

      Uncontrolled: <UncontrolledRadio
        name='radio-uncontrolled'
        options={options}
      />,

      Borderful: <Radio
        borderful
        name='radio-borderful'
        onChange={(key) => console.log(key)}
        options={options}
        value='lorem'
      />,

      'Borderful uncontrolled with content': <UncontrolledRadio
        borderful
        name='radio-uncontrolled-borderful-with-content'
        onChange={(key) => console.log(key)}
        options={optionsWithContent}
      />,

      Borderless: <Radio
        borderless
        name='radio-borderless'
        onChange={(key) => console.log(key)}
        options={options}
        value='lorem'
      />,

      'Borderless uncontrolled': <UncontrolledRadio
        borderless
        name='radio-borderless-uncontrolled'
        options={options}
      />,

      Disabled: <UncontrolledRadio
        disabled
        name='radio-disabled'
        onChange={(key) => console.log(key)}
        options={options}
        value='lorem'
      />,

      'Borderless and disabled': <UncontrolledRadio
        borderless
        disabled
        name='radio-borderless-disabled'
        options={options}
        value='lorem'
      />,

      'With focus': <Radio
        focus='sit'
        name='radio-focus'
        options={options}
        value='ipsum'
      />
    }
  }
}
