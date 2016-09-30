import React from 'react'
import MouseflowExclude from '../MouseflowExclude'
import UncontrolledField from '../uncontrolled/Field'

export default {
  title: 'MouseflowExclude',
  examples: {
    require: `import MouseflowExclude from '@klarna/ui/MouseflowExclude'
import UncontrolledField from '@klarna/ui/uncontrolled/Field'`,
    Regular: (
      <MouseflowExclude>
        <UncontrolledField
          name='a-sensitive-valued-field'
          label='Sensitive information'
        />
      </MouseflowExclude>
    )
  }
}
