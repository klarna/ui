import React from 'react'
import Radio from '../Radio'
import * as Checklist from '../Checklist'
import * as Paragraph from '../Paragraph'
import { LIVE_WIDE } from '../Showroom/variationTypes'
import BoxSelector from '../BoxSelector'
import Dropdown from '../Dropdown'
import Subtitle from '../Subtitle'

const options = [
  {key: 'lorem', label: 'Lorem', description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'},
  {key: 'sit', label: 'Sit', description: 'Amet et consequetur'},
  {key: 'ipsum', label: 'Ipsum', description: 'Dummy text ever since the 1500s.'}
]

const card = <svg width='32px' height='22px' viewBox='0 0 32 22'>
  <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
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
    content: <Paragraph.Secondary style={{marginBottom: -10}}>
      Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
    </Paragraph.Secondary>,
    leftPad: true
  },

  {
    key: 'sit',
    label: 'Sit',
    description: 'Amet et consequetur',
    content: <div>
      <BoxSelector
        name='installments'
        layout='horizontal'
        onChange={(key) => console.log('You selected', key)}
        options={[{content: <div>Long one line text in div</div>, key: 'installments_3'}, {content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>], key: 'installments_6'}]}
        defaultValue='installments_6'
      />
      <Checklist.Main style={{marginTop: '20px'}}>
        <Checklist.Item>Just one click and you’re done</Checklist.Item>
        <Checklist.Item>Very little hassle</Checklist.Item>
        <Checklist.Item>Just do it! It can be done today, so why wait for  tomorrow?</Checklist.Item>
      </Checklist.Main>
    </div>
  },

  {
    key: 'ipsum',
    label: 'Ipsum',
    description: 'Dummy text ever since the 1500s.',
    content: <div>
      <Subtitle>Choose your destiny</Subtitle>

      <Dropdown
        options={[
          {key: 'coffee', label: 'Coffee'},
          {key: 'chai', label: 'Chai'},
          {key: 'latte', label: 'Latte'}
        ]}
        label='Infusion'
        defaultValue='coffee'
      />
    </div>
  }
]

export default {
  title: 'Radio',

  examples: {
    require: `import Radio from '@klarna/ui/Radio'`,
    type: LIVE_WIDE,

    examples: {
      Regular: <Radio
        onChange={(key) => console.log(key)}
        options={optionsWithContent}
        defaultValue='lorem'
      />,

      'Without content': <Radio
        onChange={(key) => console.log(key)}
        options={options}
      />,

      'Partially collapsed': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={1}
      />,

      Controlled: <Radio
        focus='sit'
        name='radio'
        onChange={(key) => console.log(key)}
        options={options}
        value='ipsum'
      />,

      'Partially collapsed & controlled': <Radio
        options={optionsWithContent}
        expandLabel='Show me all the options'
        visibleOptions={1}
        fullyExpanded={false}
      />,

      Borderless: <Radio
        borderless
        onChange={(key) => console.log(key)}
        options={options}
        defaultValue='lorem'
      />,

      Disabled: <Radio
        disabled
        onChange={(key) => console.log(key)}
        options={options}
        defaultValue='lorem'
      />,

      'One field disabled': <Radio
        onChange={(key) => console.log(key)}
        options={[
          ...optionsWithContent.slice(0, 2),
          {...optionsWithContent[2], disabled: true}
        ]}
        defaultValue='lorem'
      />,

      'Borderless and disabled': <Radio
        borderless
        disabled
        options={options}
        defaultValue='lorem'
      />,

      'With a single option': <Radio
        options={[{
          key: 'lorem',
          label: 'Lorem',
          description: 'Lorem Ipsum is simply dummy.',
          aside: card,
          content: <Paragraph.Secondary condensed>
            Offal man braid XOXO DIY, pok pok tbh poke post-ironic neutra try-hard small batch.
          </Paragraph.Secondary>,
          leftPad: true
        }]}
      />,

      'Dynamic styling': <Radio
        customize={{
          backgroundColor: '#660080',
          borderRadius: '10px',
          bulletColor: '#00ce3e',
          textPrimaryColor: 'green',
          textSecondaryColor: 'red'
        }}
        options={options}
      />
    }
  }
}
