import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Remind ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color)}
      viewBox='0 0 22 22'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(1, 2)'>
        <path
          d='M3.01,9.77 C3.01,5.91 6.15,2.77 10.01,2.77 C13.87,2.77 17.01,5.91 17.01,9.77 C17.01,13.63 13.87,16.77 10.01,16.77 C6.15,16.77 3.01,13.63 3.01,9.77 L3.01,9.77 Z M15.92,15.14 C17.21,13.72 18.01,11.84 18.01,9.77 C18.01,5.36 14.42,1.77 10.01,1.77 C5.6,1.77 2.01,5.36 2.01,9.77 C2.01,11.8 2.77,13.64 4.02,15.05 L1.92,17.15 C1.73,17.34 1.73,17.66 1.92,17.85 C2.02,17.95 2.15,18.0 2.28,18.0 C2.4,18.0 2.53,17.95 2.63,17.85 L4.72,15.76 C6.13,17.01 7.98,17.77 10.01,17.77 C11.99,17.77 13.8,17.04 15.2,15.84 L17.2,17.83 C17.29,17.93 17.42,17.98 17.55,17.98 C17.68,17.98 17.81,17.93 17.9,17.83 C18.1,17.64 18.1,17.32 17.9,17.12 L15.92,15.14 Z' />
        <path
          d='M4.72,1.28 C4.95,1.14 5.02,0.83 4.88,0.59 C4.73,0.36 4.42,0.29 4.19,0.43 C2.38,1.56 0.95,3.17 0.05,5.09 C-0.07,5.34 0.04,5.64 0.29,5.76 C0.36,5.79 0.43,5.81 0.5,5.81 C0.69,5.81 0.87,5.7 0.95,5.52 C1.77,3.77 3.08,2.31 4.72,1.28' />
        <path
          d='M19.94,5.03 C19.01,3.1 17.55,1.48 15.72,0.37 C15.48,0.22 15.17,0.3 15.03,0.53 C14.89,0.77 14.96,1.08 15.2,1.22 C16.87,2.24 18.19,3.7 19.03,5.46 C19.12,5.64 19.3,5.75 19.49,5.75 C19.56,5.75 19.63,5.73 19.7,5.7 C19.95,5.58 20.06,5.28 19.94,5.03' />
        <path
          d='M12.38,9.81 L9.76,9.81 L7.97,7.04 C7.82,6.81 7.51,6.74 7.28,6.89 C7.05,7.04 6.98,7.35 7.13,7.58 L9.21,10.81 L12.38,10.81 C12.66,10.81 12.88,10.59 12.88,10.31 C12.88,10.04 12.66,9.81 12.38,9.81' />
      </g>
    </svg>
  )
}

Remind.defaultProps = {
  color: 'blue',
  styles: {}
}

Remind.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
