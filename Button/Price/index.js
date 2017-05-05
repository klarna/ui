import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'

import grid from '../../settings/grid'
import * as palette from '../../settings/palette'

const defaultStyles = {
  main: {
    base: {
      float: 'right',
      marginLeft: grid(4),
      paddingLeft: grid(4)
    }
  },
  separator: {
    base: {
      borderLeftColor: palette.GREY_LINES_TRANSPARENT,
      borderLeftStyle: 'solid',
      borderLeftWidth: grid(0.2),
      height: grid(4),
      position: 'relative',
      right: grid(4),
      top: grid(0.2)
    },
    blue: {
      borderLeftColor: palette.KLARNA_BLUE_TRANSPARENT
    }
  }
}

function Price ({children, blue, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <span
    style={finalStyles.main.base}
    {...props}>
    <span
      style={{
        ...finalStyles.separator.base,
        ...(blue ? finalStyles.separator.blue : {})
      }}
    />
    {children}
  </span>
}

Price.displayName = 'Button.Price'

Price.propTypes = {
  children: PropTypes.node
}

Price.defaultProps = {
  styles: {}
}

export default Price
