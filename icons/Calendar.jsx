import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Calendar ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'tiny', color, className)}
      fillRule='evenodd'
      height='20px'
      width='20px'
      viewBox='0 0 20 20'
      {...props}>
      <path
        className={classNames('illustration__fill')}
        d='M3,6.99715203 C3,5.34187067 4.34237885,4 6.00335124,4 L13.9966488,4 C15.6553538,4 17,5.34162278 17,6.99715203 L17,13.002848 C17,14.6581293 15.6576211,16 13.9966488,16 L6.00335124,16 C4.34464615,16 3,14.6583772 3,13.002848 L3,6.99715203 Z M4,6.99961498 C4,5.89525812 4.90195036,5 6.0085302,5 L13.9914698,5 C15.1007504,5 16,5.88743329 16,6.99961498 L16,13.000385 C16,14.1047419 15.0980496,15 13.9914698,15 L6.0085302,15 C4.8992496,15 4,14.1125667 4,13.000385 L4,6.99961498 Z'
      />
      <g className={classNames('illustration__stroke')}>
        <path
          d='M3.5,8.5 L16.5,8.5'
          strokeLinecap='square' />
        <path
          d='M6.5,2.5 L6.5,5.5'
          strokeLinecap='round' />
        <path
          d='M13.5,2.5 L13.5,5.5'
          strokeLinecap='round' />
      </g>
    </svg>
  )
}

Calendar.defaultProps = {
  color: 'blue',
  styles: {}
}

Calendar.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
