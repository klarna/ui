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
      color: 'inherit',
      margin: 0,
      paddingTop: grid(0.6),
      paddingBottom: grid(0.4),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.MAIN_BODY.mobile),
        fontWeight: fontWeights.REGULAR,
        lineHeight: grid(4)
      })
    }
  }
}

function Paragraph ({ children, styles, ...props }) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <p style={finalStyles.base.main} {...props}>
    {children}
  </p>
}

Paragraph.displayName = 'Alert.Paragraph'

Paragraph.propTypes = {
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
)(Paragraph)
