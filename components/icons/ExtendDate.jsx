import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function ExtendDate ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 22 22'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(2, 2)'>
        <path
          d='M10,0 C9.72,0 9.5,0.22 9.5,0.5 C9.5,0.78 9.72,1 10,1 C14.41,1 18,4.59 18,9 C18,13.41 14.41,17 10,17 C5.59,17 2,13.41 2,9 C2,9.0 2.0,8.99 2.0,8.99 L2.97,8.99 L1.44,6.56 L0,8.99 L1.0,8.99 C1.0,8.99 1,9.0 1,9 C1,13.96 5.04,18 10,18 C14.96,18 19,13.96 19,9 C19,4.04 14.96,0 10,0' />
        <path
          d='M6.46,13.04 C6.56,13.04 6.67,13.01 6.76,12.94 L10.8,9.9 C10.81,9.89 10.81,9.88 10.82,9.87 C10.85,9.85 10.87,9.82 10.89,9.8 C10.91,9.77 10.93,9.75 10.94,9.72 C10.96,9.69 10.96,9.66 10.97,9.63 C10.98,9.6 10.99,9.57 10.99,9.53 C10.99,9.52 11,9.51 11,9.5 L11,4.63 C11,4.35 10.78,4.13 10.5,4.13 C10.22,4.13 10,4.35 10,4.63 L10,9.25 L6.16,12.14 C5.94,12.31 5.89,12.62 6.06,12.84 C6.16,12.97 6.31,13.04 6.46,13.04' />
        <path
          d='M14.5,5 C14.22,5 14,5.22 14,5.5 C14,5.78 14.22,6 14.5,6 C14.78,6 15,5.78 15,5.5 C15,5.22 14.78,5 14.5,5' />
        <path
          d='M15.5,10 C15.78,10 16,9.78 16,9.5 C16,9.22 15.78,9 15.5,9 C15.22,9 15,9.22 15,9.5 C15,9.78 15.22,10 15.5,10' />
        <path
          d='M14,13.5 C14,13.22 13.78,13 13.5,13 C13.22,13 13,13.22 13,13.5 C13,13.78 13.22,14 13.5,14 C13.78,14 14,13.78 14,13.5' />
        <path
          d='M9,14.5 C9,14.78 9.22,15 9.5,15 C9.78,15 10,14.78 10,14.5 C10,14.22 9.78,14 9.5,14 C9.22,14 9,14.22 9,14.5' />
      </g>
    </svg>
  )
}

ExtendDate.defaultProps = {
  color: 'blue',
  styles: {}
}

ExtendDate.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
