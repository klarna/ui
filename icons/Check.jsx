import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Check ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'tiny', color, className)}
      height='20px'
      width='20px'
      viewBox='0 0 20 20'
      {...props}>
      <g
        transform='translate(2, 2)'
        className={classNames('illustration__stroke')}>
        <circle
          cx='8'
          cy='8'
          r='7.5'
        />
        <path
          d='M6.5,11 L4.5,9'
          strokeLinecap='round'
        />
        <path
          d='M11.5,11 L6.5,6'
          strokeLinecap='round'
          transform='translate(9, 8.5) scale(1, -1) translate(-9, -8.5)'
        />
      </g>
    </svg>
  )
}

Check.defaultProps = {
  color: 'blue',
  styles: {}
}

Check.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
