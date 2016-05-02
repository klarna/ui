import React, { PropTypes } from 'react'

export const INLINED_ICONS = {
  CALENDAR: 'calendar',
  CARD: 'card',
  LOCK: 'lock'
}

export const renderInlinedIcon = ({ icon }, styles) => {
  if (icon) {
    switch (icon) {
      case INLINED_ICONS.CALENDAR:
        return (
          <svg className={styles.icon} viewBox="0 0 20 20">
            <path className={styles.fill} d="M3,6.99715203 C3,5.34187067 4.34237885,4 6.00335124,4 L13.9966488,4 C15.6553538,4 17,5.34162278 17,6.99715203 L17,13.002848 C17,14.6581293 15.6576211,16 13.9966488,16 L6.00335124,16 C4.34464615,16 3,14.6583772 3,13.002848 L3,6.99715203 Z M4,6.99961498 C4,5.89525812 4.90195036,5 6.0085302,5 L13.9914698,5 C15.1007504,5 16,5.88743329 16,6.99961498 L16,13.000385 C16,14.1047419 15.0980496,15 13.9914698,15 L6.0085302,15 C4.8992496,15 4,14.1125667 4,13.000385 L4,6.99961498 Z"></path>

            <g className={styles.stroke}>
              <path
                d="M3.5,8.5 L16.5,8.5"
                stroke-linecap="square"></path>
              <path
                d="M6.5,2.5 L6.5,5.5"
                stroke-linecap="round"></path>
              <path
                d="M13.5,2.5 L13.5,5.5"
                stroke-linecap="round"></path>
            </g>
          </svg>
        )

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

      case INLINED_ICONS.LOCK:
        return (
          <svg className={styles.icon} viewBox="0 0 20 20">
            <g className={styles.fill}>
              <path d="M3,9.99810135 C3,8.89458045 3.88649038,8 4.99654009,8 L13.6481934,8 L14.9963624,8 C16.1029409,8 17,8.88670635 17,9.99810135 L17,14.0018986 C17,15.1054196 16.1029399,16 14.9941413,16 L5.00585866,16 C3.89805351,16 3,15.1132936 3,14.0018986 L3,9.99810135 Z M4,9.99077797 C4,9.44358641 4.44625523,9 5.00233387,9 L13.1270229,9 L15.0011024,9 C15.5527783,9 16,9.45097518 16,9.99077797 L16,14.009222 C16,14.5564136 15.544239,15 14.9975267,15 L5.00247329,15 C4.44882258,15 4,14.5490248 4,14.009222 L4,9.99077797 Z"></path>
              <path d="M14,6.00650452 C14,3.79394555 12.209139,2 10,2 C7.79535615,2 6,3.79377317 6,6.00650452 L6,9 L14,9 L14,6.00650452 Z M13,5.86178894 C13,4.28138968 11.6568542,3 10,3 C8.34651712,3 7,4.28126655 7,5.86178894 L7,8 L13,8 L13,5.86178894 Z"></path>
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
