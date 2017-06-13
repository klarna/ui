import React from 'react'
import RadioMark from '../RadioMark'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'RadioMark',

  examples: {
    require: 'import RadioMark from \'@klarna/ui/RadioMark\'',
    type: LIVE,

    examples: {
      Regular: <RadioMark />,
      Checked: <RadioMark checked />,
      'Checked and Disabled': <RadioMark checked disabled />,
      'Dynamic styling': <RadioMark
        checked
        customize={{
          backgroundColor: '#660080',
          bulletColor: '#00ce3e'
        }}
      />,
      'Dynamic styling, checked and disabled': <RadioMark
        checked
        disabled
        customize={{
          backgroundColor: '#660080',
          bulletColor: '#00ce3e'
        }}
      />
    }
  }
}
