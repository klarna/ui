import React from 'react'
import SegmentedField from '../SegmentedField'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'SegmentedField',

  examples: {
    require: 'import SegmentedField from \'@klarna/ui/SegmentedField\'',
    type: LIVE,

    examples: {
      Regular: <SegmentedField
        onChange={(value) => console.log(value)}
        defaultValue='312234'
      />,

      Regular2: <SegmentedField
        onChange={(value) => console.log(value)}
        value='312'
      />
    }
  }
}
