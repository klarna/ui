import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'

import * as palette from '../../settings/palette'

const defaultStyles = {
  main: {
    base: {
      backgroundColor: palette.WHITE,
      color: palette.BLACK
    },
    blue: {
      backgroundColor: palette.KLARNA_BLUE,
      color: palette.WHITE
    }
  }
}

function Plain ({blue, children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div
    style={{
      ...finalStyles.main.base,
      ...(blue ? finalStyles.main.blue : {})
    }}
    {...props}>
    {children}
  </div>
}

Plain.displayName = 'Block.Plain'

Plain.propTypes = {
  blue: PropTypes.bool,
  children: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.object
}

Plain.defaultProps = {
  styles: {
    main: {}
  }
}

export default Plain
