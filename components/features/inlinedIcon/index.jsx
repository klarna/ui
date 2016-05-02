import React, { PropTypes } from 'react'

export const INLINED_ICONS = {
  CARD: 'card'
}

export const renderInlinedIcon = ({ icon }, styles) => {
  if (icon) {
    switch (icon) {
      case INLINED_ICONS.CARD:
        return (
          <svg className={styles.icon} viewBox="0 0 20 20">
            <g
              className={styles.fill}
              transform="translate(2.000000, 4.000000)">
              <path d="M13,11 L3,11 C1.897,11 1,10.103 1,9 L1,4 L15,4 L15,9 C15,10.103 14.103,11 13,11 M3,1 L13,1 C14.103,1 15,1.897 15,3 L1,3 C1,1.897 1.897,1 3,1 M13,0 L3,0 C1.35,0 0,1.35 0,3 L0,9 C0,10.65 1.35,12 3,12 L13,12 C14.65,12 16,10.65 16,9 L16,3 C16,1.35 14.65,0 13,0"></path>
              <path d="M8.5,8 L3.5,8 C3.224,8 3,8.224 3,8.5 C3,8.776 3.224,9 3.5,9 L8.5,9 C8.776,9 9,8.776 9,8.5 C9,8.224 8.776,8 8.5,8"></path>
            </g>
          </svg>
        )
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
