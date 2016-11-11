import React from 'react'
import MouseflowExclude, { exclude } from '../MouseflowExclude'
import Field from '../Field'
import { MANUAL } from '../Showroom/variationTypes'

const ExcludedField = exclude(Field)
ExcludedField.displayName = 'ExcludedField'

export default {
  title: 'MouseflowExclude',
  examples: {
    require: `import MouseflowExclude, { exclude } from '@klarna/ui/MouseflowExclude'
import Field from '@klarna/ui/Field'`,
    type: MANUAL,

    examples: {
      Regular: {
        code: `<MouseflowExclude>
  <Field
    name='a-sensitive-valued-field'
    label='Sensitive information'
  />
</MouseflowExclude>`,
        live: <MouseflowExclude>
          <Field
            name='a-sensitive-valued-field'
            label='Sensitive information'
          />
        </MouseflowExclude>
      },

      'Higher-order component': {
        live: <ExcludedField
          name='a-sensitive-valued-field'
          label='Sensitive information'
        />,
        code: `const ExcludedField = exclude(Field)

<ExcludedField
  name='a-sensitive-valued-field'
  label='Sensitive information'
/>`
      }
    }
  }
}
