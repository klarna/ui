import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Checkmark ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      strokeLinecap='round'
      strokeWidth='2'
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 25 25'
      {...props}>
      <path
        d='M5 13.69l4.49 4.23L19.37 8'
        className={classNames('cui__illustration__stroke')} />
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
