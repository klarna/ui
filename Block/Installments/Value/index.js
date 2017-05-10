import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import compose from 'ramda/src/compose'
import {overridable} from '@klarna/higher-order-components'

import grid from '../../../settings/grid'
import typographize from '../../../settings/typographize'
import * as fontFamilies from '../../../settings/fontFamilies'
import * as fontSizes from '../../../settings/fontSizes'
import * as fontWeights from '../../../settings/fontWeights'
import * as palette from '../../../settings/palette'

const defaultStyles = {
  main: {
    base: {
      display: 'block',
      float: 'left',
      textAlign: 'center',
      width: '50%'
    }
  },
  clarification: {
    base: {
      color: palette.GREY_TEXT,
      position: 'relative',
      top: grid(-0.8),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.FOOTNOTE),
        fontWeight: fontWeights.REGULAR
      })
    }
  },
  content: {
    base: {
      margin: 0,
      paddingBottom: grid(0.6),
      paddingTop: grid(0.4),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.MAIN_BODY_BIG.mobile),
        fontWeight: fontWeights.SEMI_BOLD,
        lineHeight: grid(3)
      })
    }
  },
  title: {
    base: {
      color: palette.GREY_TEXT,
      margin: 0,
      paddingBottom: grid(0.4),
      paddingTop: grid(0.6),
      ...typographize({
        fontFamily: fontFamilies.BASE,
        fontSize: grid(fontSizes.INPUT_LABEL),
        fontWeight: fontWeights.SEMI_BOLD,
        lineHeight: grid(3)
      })
    }
  }
}

function Value ({
  clarification,
  id,
  title,
  styles,
  value,
  ...props
}) {
  const finalStyles = deepMerge(defaultStyles, styles)
  const ids = id
    ? {
      content: `${id}__content`,
      clarification: `${id}__clarification`,
      title: `${id}__title`
    } : {}

  return <div
    id={id}
    style={finalStyles.main.base}
    {...props}>
    <div id={ids.title} style={finalStyles.title.base}>
      {title}
    </div>

    <div id={ids.content} style={finalStyles.content.base}>
      {value}

      {clarification && <span
        id={ids.clarification}
        style={finalStyles.clarification.base}>
        {clarification}
      </span>}
    </div>
  </div>
}

Value.displayName = 'Block.Installments.Value'

Value.propTypes = {
  children: PropTypes.node,
  styles: PropTypes.shape({
    main: PropTypes.shape({
      base: PropTypes.object
    })
  })
}

Value.defaultProps = {
  styles: {
    main: {
      base: {}
    }
  }
}

export default compose(
  overridable(defaultStyles)
)(Value)
