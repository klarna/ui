import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

import grid from '../../../settings/grid'

const defaultStyles = {
  main: {
    base: {
      paddingTop: grid(1)
    }
  }
}

function Content ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.main.base} {...props}>
    {children}
  </div>
}

Content.displayName = 'Block.Installments.Content'

Content.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    main: PropTypes.shape({
      base: PropTypes.object
    })
  })
}

Content.defaultProps = {
  styles: {
    main: {
      base: {}
    }
  }
}

export default compose(
  overridable(defaultStyles)
)(Content)
