import React from 'react'
import PropTypes from 'prop-types'
import deepMerge from 'deepmerge'

import grid from '../settings/grid'
import typographize from '../settings/typographize'
import * as palette from '../settings/palette'
import * as fontWeights from '../settings/fontWeights'
import * as fontFamilies from '../settings/fontFamilies'

const defaultStyles = {
  main: {
    base: {
      backgroundColor: palette.KLARNA_BLUE,
      borderRadius: grid(0.2),
      color: palette.WHITE,
      display: 'inline-block',
      lineHeight: '17px',
      margin: '0 0 0 5px',
      padding: '0 6px',
      position: 'relative',
      textTransform: 'uppercase',
      top: -2,
      ...typographize({
        fontSize: grid(2),
        fontFamily: fontFamilies.BASE,
        fontWeight: fontWeights.SEMI_BOLD
      })
    }
  }
}

function PromoLabel ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <span style={finalStyles.main.base}>
    {children}
  </span>
}

PromoLabel.defaultProps = {
  styles: {}
}

PromoLabel.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.object
}

export default PromoLabel
