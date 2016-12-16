import React from 'react'
import * as Installments from '../Installments'
import {LIVE, LIVE_WIDE} from '../Showroom/variationTypes'

const options = [
  { key: 'installments_3', content: 'Long one line text in div' },
  { key: 'installments_6', content: '$64.17/mo. array of elements' },
  { key: 'installments_12', content: 'Simple text content' },
  { key: 'installments_24', content: 'Force new line' }
]

export default {
  title: 'Installments',

  variations: [
    {
      title: 'Horizontal',
      require: `import * as Installments from '@klarna/ui/Installments'`,
      type: LIVE_WIDE,

      examples: {
        Regular: <Installments.Horizontal
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          value='installments_12'
          options={options}
        />,

        Focused: <Installments.Horizontal
          onChange={(key) => console.log('You selected', key)}
          name='installments3'
          value='installments_12'
          focus='installments_6'
          options={options}
        />
      }
    },

    {
      title: 'Vertical',
      require: `import * as Installments from '@klarna/ui/Installments'`,
      type: LIVE,

      examples: {
        Regular: <Installments.Vertical
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          value='installments_12'
          options={options}
        />,

      Focused: <Installments.Vertical
          onChange={(key) => console.log('You selected', key)}
          name='installments3'
          value='installments_12'
          focus='installments_6'
          options={options}
        />
      }
    }
  ]
}
