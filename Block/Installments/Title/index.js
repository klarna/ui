import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

import grid from '../../../settings/grid'
import typographize from '../../../settings/typographize'
import * as palette from '../../../settings/palette'
import * as fontFamilies from '../../../settings/fontFamilies'
import * as fontSizes from '../../../settings/fontSizes'
import * as fontWeights from '../../../settings/fontWeights'

const defaultStyles = {
  main: {
    base: {
      height: grid(4),
      margin: 0,
      paddingBottom: grid(0.8),
      paddingTop: grid(0.2),
      textAlign: 'center',
      textTransform: 'uppercase',
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontWeight: fontWeights.SEMI_BOLD,
        fontSize: grid(fontSizes.SUBTITLE),
        lineHeight: grid(4)
      })
    }
  }
}

function Title ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.main.base} {...props}>
    {children}
  </div>
}

Title.displayName = 'Block.Installments.Title'

Title.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    main: PropTypes.shape({
      base: PropTypes.object
    })
  })
}

Title.defaultProps = {
  styles: {
    main: {
      base: {}
    }
  }
}

export default compose(
  overridable(defaultStyles)
)(Title)
