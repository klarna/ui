import React, {PropTypes} from 'react'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'
import deepMerge from 'deepmerge'

import grid from '../../settings/grid'
import typographize from '../../settings/typographize'
import * as palette from '../../settings/palette'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontSizes from '../../settings/fontSizes'
import * as fontWeights from '../../settings/fontWeights'

const defaultStyles = {
  base: {
    main: {
      backgroundColor: palette.ERROR_BACKGROUND,
      borderColor: palette.ERROR_HOVER,
      borderRadius: grid(1),
      borderStyle: 'solid',
      borderWidth: grid(0.2),
      color: palette.ERROR_TEXT,
      display: 'inline-block',
      padding: grid(4),
      textAlign: 'center',
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.MAIN_BODY.mobile),
        fontWeight: fontWeights.REGULAR,
        lineHeight: grid(4)
      })
    }
  }
}

function Error ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.base.main} {...props}>
    {children}
  </div>
}

Error.displayName = 'Alert.Error'

Error.propTypes = {
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
)(Error)
