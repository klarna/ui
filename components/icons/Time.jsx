import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'
import Circle from './parts/Circle.jsx'

export default function Time ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color, className)}
      strokeLinecap='round'
      strokeWidth='2'
      viewBox='0 0 100 100'
      {...props}>
      <g className={classNames('cui__illustration__stroke')}>
        <Circle />
        <path d='M47,28.5l0,25.5l25.5,0' />
      </g>
    </svg>
  )
}

Time.defaultProps = {
  color: 'blue',
  styles: {}
}

Time.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
