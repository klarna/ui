import React, { PropTypes } from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import classNamesBind from 'classnames/bind'
import {
  overridable,
  themeable
} from '@klarna/higher-order-components'

import grid from '../../settings/grid'
import * as palette from '../../settings/palette'

const defaultStyles = {
  base: {
    main: {
      background: palette.WHITE,
      borderColor: palette.GREY_LINES,
      borderRadius: grid(1),
      borderStyle: 'solid',
      borderWidth: grid(0.2),
      boxSizing: 'border-box',
      display: 'block',
      margin: '0 auto',
      maxWidth: grid(128),
      overflow: 'auto',
      paddingBottom: grid(1.8),
      paddingLeft: grid(3),
      paddingRight: grid(3),
      paddingTop: grid(1.8)
    }
  }
}

function Bordered ({children, customize, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)
  const customizations = customize
    ? {
      borderRadius: customize.borderRadius
    } : {}

  return <div
    style={{
      ...finalStyles.base.main,
      ...customizations
    }}
    {...props}>
    {children}
  </div>
}

Bordered.displayName = 'Block.Bordered'

Bordered.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export default compose(
  themeable((customizations, {customize}) => ({
    customize: {
      borderRadius: customizations.radius_border,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(Bordered)
