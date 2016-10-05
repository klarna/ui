import React from 'react'
import ProgressBar from '../ProgressBar'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'ProgressBar',

  examples: {
    require: 'import ProgressBar from \'@klarna/ui/ProgressBar\'',
    type: LIVE,

    examples: {
      Regular: <ProgressBar percentage={50} />,

      Blue: <ProgressBar percentage={33} fillColor='blue' />,

      'Light blue': <ProgressBar
        percentage={80}
        borderColor='light-blue'
        fillColor='gray'
      />,

      'Custom inline styles': <ProgressBar
        percentage={50}
        style={{height: '20px', width: '70%'}}
      />
    }
  }
}
