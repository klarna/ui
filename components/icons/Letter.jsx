import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Letter ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color)}
      viewBox='0 0 100 100'
      strokeWidth='2'
      {...props}>
      <g className={classNames('cui__illustration__stroke')}>
        <rect x='20' y='36' width='60' height='40' rx='4' ry='4' />
        <path d='M20,42L51,63L80.2,42' />
        <line x1='20' y1='74' x2='44' y2='59' />
        <line x1='80' y1='74' x2='56' y2='59' />
      </g>
    </svg>
  )
}

Letter.defaultProps = {
  color: 'blue',
  styles: {}
}

Letter.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
