import React from 'react'
import Installments from '../Installments'
import { LIVE_WIDE } from '../Showroom/variationTypes'

const options = [
  { key: 'installments_3', content: <div>Long one line text in div</div> },
  { key: 'installments_6', content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>] },
  { key: 'installments_12', content: 'Simple text content' },
  { key: 'installments_24', content: <div><div>Force</div><div>new line</div></div> }
]

export default {
  title: 'Installments',

  examples: {
    require: 'import Installments from \'@klarna/ui/Installments\'',
    type: LIVE_WIDE,

    examples: {
      Regular: (
        <Installments
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          defaultValue='installments_12'
          options={options}
        />
      ),

      Controlled: (
        <Installments
          onChange={(key) => console.log('You selected', key)}
          value='installments_24'
          focus='installments_6'
          options={options}
        />
      )
    }
  }
}
