import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Items ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'tiny', color, className)}
      strokeLinecap='round'
      viewBox='0 0 22 22'
      height='20px'
      width='20px'
      {...props}>
      {[6.5, 11.5, 16.5].map((y) => (
        <g
          className={classNames('illustration__stroke')}
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
