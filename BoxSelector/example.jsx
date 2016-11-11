import React from 'react'
import BoxSelector from '../BoxSelector'
import { LIVE_WIDE } from '../Showroom/variationTypes'

const options = [
  { key: 'installments_3', content: <div>Long one line text in div</div> },
  { key: 'installments_6', content: [<div key='1'>$64.17/mo.</div>, <div key='2'>array of elements</div>] },
  { key: 'installments_12', content: 'Simple text content' },
  { key: 'installments_24', content: <div><div>Force</div><div>new line</div></div> }
]

export default {
  title: 'BoxSelector',

  examples: {
    require: 'import BoxSelector from \'@klarna/ui/BoxSelector\'',
    type: LIVE_WIDE,

    examples: {
      Regular: (
        <BoxSelector
          onChange={(key) => console.log('You selected', key)}
          name='installments'
          defaultValue='installments_12'
          options={options}
        />
      ),

      Controlled: (
        <BoxSelector
          onChange={(key) => console.log('You selected', key)}
          name='installments2'
          value='installments_24'
          focus='installments_6'
          options={options}
        />
      )
    }
  }
}
