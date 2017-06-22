import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'
import Circle from './parts/Circle.jsx'

export default function Done ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'big', color, className)}
      strokeWidth='2'
      strokeLinecap='round'
      viewBox='0 0 100 100'
      height='100px'
      width='100px'
      {...props}>
      <g className={classNames('illustration__stroke')}>
        <Circle />
        <path d='M34.5,54l9.5,7.5l21.5,-23' />
      </g>
    </svg>
  )
}

Done.defaultProps = {
  color: 'blue',
  styles: {}
}

Done.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
