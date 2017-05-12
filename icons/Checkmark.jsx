import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Checkmark ({ color, styles, className, stroke, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      strokeLinecap='round'
      strokeWidth='2'
      className={classNames('illustration', 'tiny', color, className)}
      viewBox='0 0 25 25'
      height='20px'
      width='20px'
      {...props}>
      <path
        d='M5 13.69l4.49 4.23L19.37 8'
        className={classNames('illustration__stroke')}
        style={stroke ? {stroke} : undefined} />
    </svg>
  )
}

Checkmark.defaultProps = {
  color: 'blue',
  styles: {}
}

Checkmark.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
