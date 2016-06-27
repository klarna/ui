import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Logout ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 21 21'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(3, 4)'>
        <path
          d='M8.5,9 C8.224,9 8,9.224 8,9.5 C8,10.878 6.879,12 5.5,12 L3.5,12 C2.121,12 1,10.878 1,9.5 L1,3.5 C1,2.122 2.121,1 3.5,1 L5.5,1 C6.879,1 8,2.122 8,3.5 C8,3.776 8.224,4 8.5,4 C8.776,4 9,3.776 9,3.5 C9,1.57 7.43,0 5.5,0 L3.5,0 C1.57,0 0,1.57 0,3.5 L0,9.5 C0,11.43 1.57,13 3.5,13 L5.5,13 C7.43,13 9,11.43 9,9.5 C9,9.224 8.776,9 8.5,9' />
        <path
          d='M11.8535,4.1465 C11.6585,3.9515 11.3415,3.9515 11.1465,4.1465 C10.9515,4.3415 10.9515,4.6585 11.1465,4.8535 L12.2925,6.0005 L4.3745,6.0005 C4.0985,6.0005 3.8745,6.2235 3.8745,6.5005 C3.8745,6.7765 4.0985,7.0005 4.3745,7.0005 L12.2925,7.0005 L11.1465,8.1465 C10.9515,8.3415 10.9515,8.6585 11.1465,8.8535 C11.2445,8.9515 11.3725,9.0005 11.4995,9.0005 C11.6275,9.0005 11.7555,8.9515 11.8535,8.8535 L14.2075,6.5005 L11.8535,4.1465 Z' />
      </g>
    </svg>
  )
}

Logout.defaultProps = {
  color: 'blue',
  styles: {}
}

Logout.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
