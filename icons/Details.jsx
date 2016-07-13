import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Details ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 22 22'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(3, 2)'>
        <path
          d='M13.5,17 L2.5,17 C1.673,17 1,16.327 1,15.5 L1,2.5 C1,1.673 1.673,1 2.5,1 L10,1 L10,3.5 C10,4.879 11.121,6 12.5,6 L15,6 L15,15.5 C15,16.327 14.327,17 13.5,17 L13.5,17 Z M11,1.707 L14.293,5 L12.5,5 C11.673,5 11,4.327 11,3.5 L11,1.707 Z M15.962,5.309 C15.936,5.248 15.899,5.192 15.853,5.146 L10.854,0.147 C10.808,0.101 10.752,0.064 10.691,0.038 C10.63,0.013 10.565,0 10.5,0 L2.5,0 C1.121,0 0,1.121 0,2.5 L0,15.5 C0,16.879 1.121,18 2.5,18 L13.5,18 C14.879,18 16,16.879 16,15.5 L16,5.5 C16,5.435 15.987,5.37 15.962,5.309 L15.962,5.309 Z' />
      </g>

      <g
        className={classNames('cui__illustration__stroke')}
        strokeLinecap='round'
        strokeWidth='1'>
        <line x1='5.72' x2='12.12' y1='10.5' y2='10.5' />
        <line x1='5.72' x2='14.25' y1='13.55' y2='13.55' />
        <line x1='5.72' x2='14.25' y1='16.52' y2='16.52' />
      </g>
    </svg>
  )
}

Details.defaultProps = {
  color: 'blue',
  styles: {}
}

Details.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
