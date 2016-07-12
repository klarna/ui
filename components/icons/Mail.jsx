import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Mail ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      strokeWidth='5'
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 100 100'
      {...props}>
      <g className={classNames('cui__illustration__stroke')}>
        <rect x='12' y='22' width='76' height='56' rx='12' ry='12' />
        <line x1='12' y1='37' x2='51' y2='53' />
        <line x1='88' y1='37' x2='49' y2='53' />
      </g>
    </svg>
  )
}

Mail.defaultProps = {
  color: 'blue',
  styles: {}
}

Mail.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
