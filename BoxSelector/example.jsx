import React from 'react'
import BoxSelector from '../BoxSelector'
import {LIVE_WIDE} from '../Showroom/variationTypes'

const options = [
  { key: 'box-selector_3', content: 'Lorem ipsum dolor sit amet' },
  { key: 'box-selector_6', content: 'Et consequetur bla bla' },
  { key: 'box-selector_12', content: 'Lorem ipsum dolor sit amet' },
  { key: 'box-selector_24', content: 'Et consequetur bla bla' }
]

const optionsWithDisabled = [
  { key: 'box-selector_3', content: 'Lorem ipsum dolor sit amet' },
  { key: 'box-selector_6', content: 'Et consequetur bla bla', disabled: true },
  { key: 'box-selector_12', content: 'Lorem ipsum dolor sit amet' },
  { key: 'box-selector_24', content: 'Et consequetur bla bla' }
]

export default {
  title: 'BoxSelector',

  examples: {
    require: `import BoxSelector from '@klarna/ui/BoxSelector'`,
    type: LIVE_WIDE,

    examples: {
      Regular: <BoxSelector
        onChange={(key) => console.log('You selected', key)}
        name='box-selector'
        defaultValue='box-selector_12'
        options={options}
      />,

      Focused: <BoxSelector
        onChange={(key) => console.log('You selected', key)}
        name='box-selector3'
        defaultValue='box-selector_12'
        focus='box-selector_6'
        options={options}
      />,

      'With disabled': [
        <BoxSelector
          key={1}
          layout='horizontal'
          onChange={key => console.log('You selected', key)}
          name='box-selector-disabled-horizontal'
          options={optionsWithDisabled}
        />,
        <div style={{marginBottom: 20}} />,
        <BoxSelector
          key={2}
          layout='vertical'
          onChange={key => console.log('You selected', key)}
          name='box-selector-disabled-vertical'
          options={optionsWithDisabled}
        />
      ],

      Horizontal: <BoxSelector
        layout='horizontal'
        onChange={(key) => console.log('You selected', key)}
        name='box-selector4'
        defaultValue='box-selector_12'
        options={options}
      />,

      Vertical: <BoxSelector
        layout='vertical'
        onChange={(key) => console.log('You selected', key)}
        name='box-selector5'
        defaultValue='box-selector_12'
        options={options}
      />
    }
  }
}
