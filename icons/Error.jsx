import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'
import Circle from './parts/Circle.jsx'

export default function Error ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('illustration', 'big', color, className)}
      strokeWidth='2'
      viewBox='0 0 100 100'
      height='100px'
      width='100px'
      {...props}>
      <g className={classNames('illustration__stroke')}>
        <Circle />
        <line x1='38' y1='38' x2='62' y2='62' />
        <line x1='38' y1='62' x2='62' y2='38' />
      </g>
    </svg>
  )
}

Error.defaultProps = {
  color: 'blue',
  styles: {}
}

Error.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
