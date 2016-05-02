import React, { PropTypes } from 'react'
import Card from './Card'

export const INLINED_ICONS = {
  CARD: 'card'
}

export const renderInlinedIcon = (icon, styles) => {
  if (icon) {
    switch (icon) {
      case INLINED_ICONS.CARD:
        return <Card styles={styles} />
    }
  }
}

renderInlinedIcon.defaultProps = {
  icon: undefined
}

renderInlinedIcon.propTypes = {
  icon: PropTypes.oneOf(
    Object.keys(INLINED_ICONS).map((key) => INLINED_ICONS[key])
  )
}
