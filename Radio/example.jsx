import React from 'react'
import Radio from '../Radio'
import * as Checklist from '../Checklist'
import * as Paragraph from '../Paragraph'
import { LIVE_WIDE } from '../Showroom/variationTypes'
import UncontrolledInstallments from '../uncontrolled/Installments'
import UncontrolledDropdown from '../uncontrolled/Dropdown'
import Subtitle from '../Subtitle'

const options = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
  {key: 'ipsum', label: 'Ipsum', description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
]

const card = <svg width='32px' height='22px' viewBox='0 0 32 22'>
  <g stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
    <rect fill='#0074C8' x='0' y='0' width='32' height='22' rx='2' />
    <polygon fill='#E5E5E6' points='23 7 27 15 19 15' />
  </g>
</svg>

const optionsWithContent = [
  {
    key: 'lorem',
    label: 'Lorem',
    description: 'Lorem Ipsum is simply dummy.',
    aside: card,
    content: <Paragraph.Secondary condensed>
      Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
    </Paragraph.Secondary>
  },

  {
    key: 'sit',
    label: 'Sit',
    description: 'Amet et consequetur',
    content: <div>
      <UncontrolledInstallments
        name='installments'
        onChange={(key) => console.log('You selected', key)}
        options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
        value='installments_6'
      />
      <Checklist.Main style={{marginTop: '20px'}}>
        <Checklist.Item>Just one click and you're done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    </div>
  },

  {
    key: 'ipsum',
    label: 'Ipsum',
    description: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
    content: <div>
      <Subtitle>Choose your destiny</Subtitle>

      <UncontrolledDropdown
        name='ipsum-uncontrolled-dropdown'
        options={[
          {key: 'coffee', label: 'Coffee'},
          {key: 'chai', label: 'Chai'},
          {key: 'latte', label: 'Latte'}
        ]}
        label='Infusion'
        value='coffee'
      />
    </div>
  }
]

export default {
  title: 'Radio',

  examples: {
    require: `import Radio from '@klarna/ui/Radio'
import UncontrolledRadio from '@klarna/ui/uncontrolled/Radio'`,
    type: LIVE_WIDE,

    examples: {
      Regular: <Radio
        autoFocus={false}
        onChange={(key) => console.log(key)}
        name='radio-regular'
        options={optionsWithContent}
        defaultValue='lorem'
      />,

      'Without content': <Radio
        name='radio-uncontrolled-borderful-with-content'
        onChange={(key) => console.log(key)}
        options={options}
      />,

      Controlled: <Radio
        focus='sit'
        name='radio-uncontrolled'
        onChange={(key) => console.log(key)}
        options={options}
        value='ipsum'
      />,

      Borderless: <Radio
        borderless
        name='radio-borderless'
        onChange={(key) => console.log(key)}
        options={options}
        defaultValue='lorem'
      />,

      Disabled: <Radio
        disabled
        name='radio-disabled'
        onChange={(key) => console.log(key)}
        options={options}
        defaultValue='lorem'
      />,

      'Borderless and disabled': <Radio
        borderless
        disabled
        name='radio-borderless-disabled'
        options={options}
        defaultValue='lorem'
      />
    }
  }
}
