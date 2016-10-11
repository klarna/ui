import React from 'react'
import MouseflowExclude, { exclude } from '../MouseflowExclude'
import UncontrolledField from '../uncontrolled/Field'
import { LIVE } from '../Showroom/variationTypes'

const ExcludedField = exclude(UncontrolledField)
ExcludedField.displayName = 'ExcludedField'

export default {
  title: 'MouseflowExclude',
  examples: {
    require: `import MouseflowExclude, { exclude } from '@klarna/ui/MouseflowExclude'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'

const ExcludedField = exclude(UncontrolledField)
`,
    type: LIVE,

    examples: {
      Regular: <MouseflowExclude>
        <UncontrolledField
          name='a-sensitive-valued-field'
          label='Sensitive information'
        />
      </MouseflowExclude>,
      'High-order component': <ExcludedField
        name='a-sensitive-valued-field'
        label='Sensitive information'
      />
    }
  }
}
