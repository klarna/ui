import React from 'react'
import MouseflowExclude, { exclude } from '../MouseflowExclude'
import UncontrolledField from '../uncontrolled/Field'
import { MANUAL } from '../Showroom/variationTypes'

const ExcludedField = exclude(UncontrolledField)
ExcludedField.displayName = 'ExcludedField'

export default {
  title: 'MouseflowExclude',
  examples: {
    require: `import MouseflowExclude, { exclude } from '@klarna/ui/MouseflowExclude'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'`,
    type: MANUAL,

    examples: {
      Regular: {
        code: `<MouseflowExclude>
  <UncontrolledField
    name='a-sensitive-valued-field'
    label='Sensitive information'
  />
</MouseflowExclude>`,
        live: <MouseflowExclude>
          <UncontrolledField
            name='a-sensitive-valued-field'
            label='Sensitive information'
          />
        </MouseflowExclude>
      },

      'High-order component': {
        live: <ExcludedField
          name='a-sensitive-valued-field'
          label='Sensitive information'
        />,
        code: `const ExcludedField = exclude(UncontrolledField)

<ExcludedField
  name='a-sensitive-valued-field'
  label='Sensitive information'
/>`
      }
    }
  }
}
