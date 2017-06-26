import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Refresh ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      focusable='false'
      className={classNames('illustration', 'tiny', color, className)}
      width='20px'
      height='20px'
      viewBox='0 0 20 20'
      {...props}>
      <g
        stroke='none'
        strokeWidth='1'
        transform='translate(3, 3)'>
        <path
          className={classNames('illustration__stroke')}
          d='M12.1612515,9.91459661 C11.1216041,11.75507 9.12729799,13 6.838261,13 C3.4756504,13 0.750104498,10.31392 0.750104498,7 C0.750104498,3.68608 3.4756504,1 6.838261,1 C9.69531109,1 12.0925836,2.94016 12.7491304,5.55616'
        />
        <polyline
          points='7 6.5 13.5 6.5 13.5 0'
          className={classNames('illustration__stroke')}
        />
      </g>
    </svg>
  )
}

Refresh.defaultProps = {
  color: 'blue',
  styles: {}
}

Refresh.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
