import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Password ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'tiny', color, className)}
      viewBox='0 0 100 100'
      strokeWidth='5'
      height='20px'
      width='20px'
      {...props}>
      <g className={classNames('illustration__stroke')}>
        <rect x='20' y='35' width='60' height='45' rx='6' />
        <rect x='49' y='50' width='1' height='15' rx='6' />
        <rect style={{strokeDashoffset: 35}} strokeDasharray='68,84' strokeLinecap='round' x='32.5' y='10' width='35' height='45' rx='8' />
      </g>
    </svg>
  )
}

Password.defaultProps = {
  color: 'blue',
  styles: {}
}

Password.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
