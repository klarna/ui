import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Calendar ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('illustration', 'tiny', color, className)}
      viewBox='0 0 20 20'
      height='20px'
      width='20px'
      {...props}>
      <rect
        className={classNames('illustration__stroke')}
        x='3'
        y='4'
        width='14'
        height='12'
        rx='3' />
      <path
        d='M3.5,8.5 L16.5,8.5'
        className={classNames('illustration__stroke')} />
      <path
        d='M6.5,2.5 L6.5,5.5'
        className={classNames('illustration__stroke')} />
      <path
        d='M13.5,2.5 L13.5,5.5'
        className={classNames('illustration__stroke')} />
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
