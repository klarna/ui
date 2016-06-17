import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'
import Circle from './parts/Circle.jsx'

export default function Done ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color)}
      strokeWidth='2'
      strokeLinecap='round'
      {...props}>
      <g className={classNames('cui__illustration__stroke')}>
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
