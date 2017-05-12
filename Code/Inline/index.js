import React from 'react'
import PropTypes from 'prop-types'
import deepMerge from 'deepmerge'
import * as fontFamilies from '../../settings/fontFamilies'
import * as palette from '../../settings/palette'

const defaultStyles = {
  base: {
    main: {
      color: palette.BLACK,
      fontFamily: fontFamilies.CODE
    }
  }
}

export default function Inline ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <code style={finalStyles.base.main}>
    {children}
  </code>
}

Inline.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    base: PropTypes.shape({
      main: PropTypes.object
    })
  })
}

Inline.defaultProps = {
  styles: {
    base: {
      main: {}
    }
  }
}
