import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {themeable, overridable} from '@klarna/higher-order-components'

import grid from '../../settings/grid'
import typographize from '../../settings/typographize'
import * as palette from '../../settings/palette'
import * as fontFamilies from '../../settings/fontFamilies'
import * as fontSizes from '../../settings/fontSizes'
import * as fontWeights from '../../settings/fontWeights'

const defaultStyles = {
  main: {
    base: {
      background: palette.LIGHT_GREY.base,
      borderRadius: grid(1),
      lineHeight: grid(4),
      listStyle: 'none',
      marginBottom: 0,
      marginLeft: 0,
      marginRight: 0,
      marginTop: grid(-0.2),
      paddingBottom: grid(1.8),
      paddingLeft: grid(4),
      paddingRight: grid(4),
      paddingTop: grid(2)
    },
    chromeless: {
      background: 'transparent',
      border: 0,
      margin: 0,
      padding: 0
    }
  }
}

function Main ({chromeless, children, customize, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  const dynamicStyles = customize
    ? {
      borderRadius: customize.borderRadius,
      borderColor: customize.borderColor
    } : {}

  return <ul
    style={{
      ...finalStyles.main.base,
      ...(chromeless ? finalStyles.main.chromeless : {}),
      ...dynamicStyles
    }}
    {...props}>
    {children}
  </ul>
}

Main.displayName = 'Checklist.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    strokeColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  })
}

export default compose(
  themeable((customizations, {customize}) => ({
    customize: {
      strokeColor: customizations.color_details,
      textColor: customizations.color_text,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(Main)
