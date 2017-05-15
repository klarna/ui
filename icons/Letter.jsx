import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Letter ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      strokeWidth='2'
      height='100px'
      width='100px'
      {...props}>
      <g className={classNames('illustration__stroke')}>
        <rect x='20' y='36' width='60' height='40' rx='4' ry='4' />
        <path d='M20,42L51,63L80.2,42' />
        <line x1='20' y1='74' x2='44' y2='59' />
        <line x1='80' y1='74' x2='56' y2='59' />
      </g>
    </svg>
  )
}

Letter.defaultProps = {
  color: 'blue',
  styles: {}
}

Letter.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
