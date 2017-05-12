import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Search ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <svg
    className={classNames('illustration', 'tiny', color, className)}
    width='20px' height='20px'
    viewBox='0 0 20 20'
    {...props}>
    <g className={classNames('illustration__stroke')}>
      <path
        d='M16,16 L12,12'
      />

      <circle
        cx='8'
        cy='8'
        r='5'
      />
    </g>
  </svg>
}

Search.defaultProps = {
  color: 'blue',
  styles: {}
}

Search.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
