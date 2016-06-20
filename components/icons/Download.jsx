import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Download ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color)}
      viewBox='0 0 22 22'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(2, 2)'>
        <path
          d='M16.58,10.63 C16.31,10.63 16.08,10.85 16.08,11.13 L16.08,13.5 C16.08,14.88 14.96,16 13.58,16 L3.5,16 C2.12,16 1,14.88 1,13.5 L1,11.08 C1,10.81 0.78,10.58 0.5,10.58 C0.22,10.58 0,10.81 0,11.08 L0,13.5 C0,15.43 1.57,17 3.5,17 L13.58,17 C15.51,17 17.08,15.43 17.08,13.5 L17.08,11.13 C17.08,10.85 16.86,10.63 16.58,10.63' />
        <path
          d='M8.48,12.23 L11.78,10.0 C12.01,9.84 12.07,9.53 11.91,9.3 C11.76,9.07 11.45,9.01 11.22,9.17 L9.0,10.67 L9.0,0.58 C9.0,0.31 8.78,0.08 8.5,0.08 C8.22,0.08 8.0,0.31 8.0,0.58 L8.0,10.69 L5.78,9.17 C5.56,9.01 5.24,9.07 5.09,9.3 C4.93,9.53 4.99,9.84 5.22,10.0 L8.48,12.23 Z' />
      </g>
    </svg>
  )
}

Download.defaultProps = {
  color: 'blue',
  styles: {}
}

Download.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
