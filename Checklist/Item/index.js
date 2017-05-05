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
      margin: 0,
      paddingBottom: grid(0.4),
      paddingLeft: grid(5),
      paddingRight: 0,
      paddingTop: 0,
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.MAIN_BODY.mobile),
        fontWeight: fontWeights.REGULAR,
        lineHeight: grid(4)
      })
    }
  },
  checkmark: {
    base: {
      fill: 'none',
      height: grid(4),
      marginLeft: grid(-5),
      marginRight: grid(1),
      position: 'relative',
      stroke: palette.KLARNA_BLUE,
      strokeLinecap: 'round',
      strokeWidth: 2,
      top: grid(1),
      width: grid(4)
    }
  }
}

function Item ({children, customize, id, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  const listItemDynamicStyles = customize
    ? { color: customize.textColor }
    : undefined

  const iconDynamicStyles = customize
    ? { stroke: customize.strokeColor }
    : undefined

  const ids = id
    ? {
      checkmark: `${id}__checkmark`
    } : {}

  return <li
    id={id}
    style={{
      ...finalStyles.main.base,
      ...listItemDynamicStyles
    }}
    {...props}>
    <svg
      id={ids.checkmark}
      style={{
        ...finalStyles.checkmark.base,
        ...iconDynamicStyles
      }}
      viewBox='0 0 25 25'
      aria-labelledby='Checkmark'
      height='20px'
      width='20px'>
      <path d='M5 13.69l4.49 4.23L19.37 8' />
    </svg>
    {children}
  </li>
}

Item.displayName = 'Checklist.Item'

Item.propTypes = {
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
)(Item)
