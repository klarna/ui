import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Lock ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'tiny', color, className)}
      height='20px'
      width='20px'
      viewBox='0 0 20 20'
      fillRule='evenodd'
      {...props}>
      <g className={classNames('illustration__fill')}>
        <path d='M3,9.99810135 C3,8.89458045 3.88649038,8 4.99654009,8 L13.6481934,8 L14.9963624,8 C16.1029409,8 17,8.88670635 17,9.99810135 L17,14.0018986 C17,15.1054196 16.1029399,16 14.9941413,16 L5.00585866,16 C3.89805351,16 3,15.1132936 3,14.0018986 L3,9.99810135 Z M4,9.99077797 C4,9.44358641 4.44625523,9 5.00233387,9 L13.1270229,9 L15.0011024,9 C15.5527783,9 16,9.45097518 16,9.99077797 L16,14.009222 C16,14.5564136 15.544239,15 14.9975267,15 L5.00247329,15 C4.44882258,15 4,14.5490248 4,14.009222 L4,9.99077797 Z' />
        <path d='M14,6.00650452 C14,3.79394555 12.209139,2 10,2 C7.79535615,2 6,3.79377317 6,6.00650452 L6,9 L14,9 L14,6.00650452 Z M13,5.86178894 C13,4.28138968 11.6568542,3 10,3 C8.34651712,3 7,4.28126655 7,5.86178894 L7,8 L13,8 L13,5.86178894 Z' />
      </g>
    </svg>
  )
}

Lock.defaultProps = {
  color: 'blue',
  styles: {}
}

Lock.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
