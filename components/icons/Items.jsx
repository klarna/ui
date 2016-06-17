import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Items ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color)}
      strokeLinecap='round'
      viewBox='0 0 22 22'
      {...props}>
      {[6.5, 11.5, 16.5].map((y) => (
        <g
          className={classNames('cui__illustration__stroke')}
          key={y}>
          <circle r='1.5' cx='5' cy={y} />
          <line x1='9.2' x2='19.5' y1={y} y2={y} />
        </g>
      ))}
    </svg>
  )
}

Items.defaultProps = {
  color: 'blue',
  styles: {}
}

Items.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
