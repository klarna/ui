import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

import grid from '../../../settings/grid'
import * as palette from '../../../settings/palette'

const defaultStyles = {
  main: {
    base: {
      background: palette.LIGHT_GREY.base,
      borderRadius: grid(1),
      display: 'block',
      overflow: 'auto',
      paddingBottom: grid(3),
      paddingLeft: '10%',
      paddingRight: '10%',
      paddingTop: grid(3)
    },
    leftAlign: {
      padding: grid(3)
    }
  }
}

function Main ({children, leftAlign, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div
    style={{
      ...finalStyles.main.base,
      ...(leftAlign ? finalStyles.main.leftAlign : {})
    }} {...props}>
    {children}
  </div>
}

Main.displayName = 'Block.Installments.Main'

Main.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    main: PropTypes.shape({
      base: PropTypes.object
    })
  })
}

Main.defaultProps = {
  styles: {
    main: {
      base: {}
    }
  }
}

export default compose(
  overridable(defaultStyles)
)(Main)
