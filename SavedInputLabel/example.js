import React from 'react'
import SavedInputLabel from '../SavedInputLabel'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'SavedInputLabel',

  examples: {
    require: `import SavedInputLabel from '@klarna/ui/SavedInputLabel'`,
    type: LIVE,

    examples: {
      Regular: <SavedInputLabel
        label='Your phone'
        value='●●●●●●●●● 78'
      />
    }
  }
}
