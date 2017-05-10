import React, { PropTypes } from 'react'
import deepMerge from 'deepmerge'
import paletteOptions from '../lib/palette'

import grid from '../settings/grid'
import typographize from '../settings/typographize'
import * as palette from '../settings/palette'
import * as fontFamilies from '../settings/fontFamilies'
import * as fontSizes from '../settings/fontSizes'
import * as fontWeights from '../settings/fontWeights'

const defaultStyles = {
  main: {
    base: {
      margin: 0,
      paddingBottom: grid(0.8),
      paddingTop: grid(1.2),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontWeight: fontWeights.LIGHT,
        fontSize: grid(fontSizes.AMOUNT_TEXT),
        lineHeight: grid(10)
      })
    },
    black: {
      color: palette.BLACK
    },
    blue: {
      color: palette.KLARNA_BLUE
    },
    white: {
      color: palette.WHITE
    },
    inverse: {
      color: palette.WHITE
    },
    gray: {
      color: palette.GREY_TEXT
    },
    success: {
      color: palette.GREEN
    },
    error: {
      color: palette.ERROR
    },
    warning: {
      color: palette.WARNING
    }
  }
}

function Amount ({ children, color, styles, ...props }) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <p
    style={{
      ...finalStyles.main.base,
      ...finalStyles.main[color]
    }}
    {...props}>
    {children}
  </p>
}

Amount.defaultProps = {
  color: 'black',
  styles: {
    main: {
      base: {}
    }
  }
}

Amount.propTypes = {
  color: PropTypes.oneOf(paletteOptions),
  children: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.shape({
    main: PropTypes.shape({
      base: PropTypes.object
    })
  })
}

export default Amount
