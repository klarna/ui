import React from 'react'
import MouseflowExclude from '../MouseflowExclude'
import UncontrolledField from '../uncontrolled/Field'
import { LIVE } from '../Showroom/variationTypes'

export default {
  title: 'MouseflowExclude',
  examples: {
    require: `import MouseflowExclude from '@klarna/ui/MouseflowExclude'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'`,
    type: LIVE,

    examples: {
      Regular: <MouseflowExclude>
        <UncontrolledField
          name='a-sensitive-valued-field'
          label='Sensitive information'
        />
      </MouseflowExclude>
    }
  }
}
