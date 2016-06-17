import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'
import Circle from './parts/Circle.jsx'

export default function Error ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color)}
      strokeWidth='2'
      {...props}>
      <g className={classNames('cui__illustration__stroke')}>
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
