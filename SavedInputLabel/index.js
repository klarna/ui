import React, {PropTypes} from 'react'
import deepMerge from 'deepmerge'
import * as Paragraph from '../Paragraph'

import grid from '../settings/grid'
import * as palette from '../settings/palette'
import * as fontWeights from '../settings/fontWeights'

const defaultStyles = {
  base: {
    main: {
      alignItems: 'center',
      borderColor: palette.GREY_LINES,
      borderStyle: 'solid',
      borderBottomWidth: grid(0.2),
      borderLeftWidth: 0,
      borderRightWidth: 0,
      borderTopWidth: grid(0.2),
      display: 'flex',
      justifyContent: 'center',
      paddingBottom: grid(1.8),
      paddingTop: grid(1.8)
    },
    label: {
      marginRight: grid(1)
    },
    value: {
      fontWeight: fontWeights.SEMI_BOLD
    }
  }
}

export default function SavedInputLabel ({id, label, styles, value, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  const ids = id
    ? {
      label: `${id}__label`,
      value: `${id}__value`
    } : {}

  return <div style={finalStyles.base.main} {...props}>
    <Paragraph.Secondary
      id={ids.label}
      style={finalStyles.base.label}>
      {label}
    </Paragraph.Secondary>

    <Paragraph.Primary
      id={ids.value}
      style={finalStyles.base.value}>
      {value}
    </Paragraph.Primary>
  </div>
}

SavedInputLabel.defaultProps = {
  styles: {}
}

SavedInputLabel.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  styles: PropTypes.shape({
    base: PropTypes.shape({
      main: PropTypes.object,
      label: PropTypes.object,
      value: PropTypes.object
    })
  }),
  value: PropTypes.string
}
