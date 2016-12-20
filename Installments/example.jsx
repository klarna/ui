import React from 'react'
import Installments from '../Installments'
import {LIVE_WIDE} from '../Showroom/variationTypes'

const options = [
  { key: 'installments_3', content: 'Lorem ipsum dolor sit amet' },
  { key: 'installments_6', content: 'Et consequetur bla bla' },
  { key: 'installments_12', content: 'Lorem ipsum dolor sit amet' },
  { key: 'installments_24', content: 'Et consequetur bla bla' }
]

export default {
  title: 'Installments',

  examples: {
    require: 'import Installments from \'@klarna/ui/Installments\'',
    type: LIVE_WIDE,

    examples: {
      Regular: <Installments
        onChange={(key) => console.log('You selected', key)}
        name='installments'
        defaultValue='installments_12'
        options={options}
      />,

      Focused: <Installments
        onChange={(key) => console.log('You selected', key)}
        name='installments3'
        defaultValue='installments_12'
        focus='installments_6'
        options={options}
      />,

      Horizontal: <Installments
        layout='horizontal'
        onChange={(key) => console.log('You selected', key)}
        name='installments'
        defaultValue='installments_12'
        options={options}
      />,

      Vertical: <Installments
        layout='vertical'
        onChange={(key) => console.log('You selected', key)}
        name='installments'
        defaultValue='installments_12'
        options={options}
      />
    }
  }
}
