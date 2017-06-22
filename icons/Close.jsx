import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Close ({ color, styles, className, ...props }) {
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
        className={classNames('illustration__stroke')}
        transform='translate(2.5, 2.5)'>
        <circle cx='7.5' cy='7.5' r='7.5' />
        <path
          d='M10,10 L5,5'
          strokeLinecap='round'
          transform='translate(7.5, 7.5) scale(1, -1) translate(-7.5, -7.5) ' />
        <path
          d='M10,10 L5,5'
          strokeLinecap='round'
          transform='translate(7.5, 7.5) scale(-1, -1) translate(-7.5, -7.5) ' />
      </g>
    </svg>
  )
}

Close.defaultProps = {
  color: 'blue',
  styles: {}
}

Close.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
