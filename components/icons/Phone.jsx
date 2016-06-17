import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Phone ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color)}
      viewBox='0 0 21 21'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}>
        <path
          d='M16.16,15.97 L15.47,16.61 L15.4,16.66 C13.92,17.89 10.25,16.32 7.37,13.23 C4.49,10.14 3.18,6.36 4.51,4.96 L4.56,4.91 L5.25,4.27 C5.44,4.09 5.72,3.99 5.96,4.0 C6.23,4.01 6.48,4.12 6.66,4.32 L8.02,5.78 C8.2,5.97 8.3,6.23 8.29,6.5 C8.28,6.76 8.17,7.01 7.97,7.19 L7.14,7.97 L7.13,8.18 C7.12,8.24 7.07,9.8 8.95,11.81 C10.77,13.77 12.33,13.82 12.39,13.82 L12.6,13.82 L13.43,13.04 C13.83,12.67 14.47,12.69 14.84,13.09 L16.21,14.56 C16.39,14.75 16.48,15.01 16.47,15.27 C16.46,15.54 16.35,15.79 16.16,15.97 M16.94,13.87 L15.58,12.41 C14.82,11.61 13.56,11.56 12.75,12.31 L12.23,12.79 C11.84,12.71 10.84,12.38 9.68,11.13 C8.47,9.83 8.2,8.8 8.14,8.4 L8.66,7.92 C9.05,7.56 9.27,7.07 9.29,6.53 C9.31,6.0 9.12,5.49 8.75,5.1 L7.39,3.64 C7.03,3.25 6.53,3.02 6.0,3.0 C5.48,2.97 4.95,3.17 4.56,3.54 L3.78,4.29 C2.04,6.1 3.3,10.33 6.64,13.91 C9.1,16.55 11.99,18.08 14.08,18.08 C14.83,18.08 15.48,17.89 15.97,17.48 L16.84,16.7 C17.65,15.95 17.69,14.68 16.94,13.87' />
      </g>
    </svg>
  )
}

Phone.defaultProps = {
  color: 'blue',
  styles: {}
}

Phone.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
