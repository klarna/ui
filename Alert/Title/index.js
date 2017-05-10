import React, {PropTypes} from 'react'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'
import deepMerge from 'deepmerge'

import grid from '../../settings/grid'
import typographize from '../../settings/typographize'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontSizes from '../../settings/fontSizes'
import * as fontWeights from '../../settings/fontWeights'

const defaultStyles = {
  base: {
    main: {
      margin: 0,
      paddingTop: grid(0.4),
      paddingBottom: grid(0.6),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.MAIN_BODY_BIG.mobile),
        fontWeight: fontWeights.SEMI_BOLD,
        lineHeight: grid(3)
      })
    }
  }
}

function Title ({ children, styles, ...props }) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <h1 style={finalStyles.base.main} {...props}>
    {children}
  </h1>
}

Title.displayName = 'Alert.Title'

Title.propTypes = {
  children: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.shape({
    base: PropTypes.shape({
      main: PropTypes.object
    })
  })
}

export default compose(
  overridable(defaultStyles)
)(Title)
