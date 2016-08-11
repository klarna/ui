import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function AllSet ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      {...props}>
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(24, 20)'>
        <path
          d='M37.837,27.661 L20.32,45.348 L13.24,38.624 C12.836,38.244 12.204,38.26 11.822,38.66 C11.442,39.061 11.46,39.69 11.86,40.075 L20.36,48.1471 L39.259,29.069 C39.648,28.677 39.644,28.043 39.252,27.654 C38.858,27.266 38.227,27.269 37.837,27.661'></path>
        <path
          d='M50,53 C50,55.78 47.78,58 45,58 L7,58 C4.243,58 2,55.757 2,53 L2,15 C2,12.243 4.243,10 7,10 L13,10 L13,20 L39,20 L39,10 L45,10 C47.76,10 50,12.24 50,15 L50,53 Z M17,10 L18,10 L34,10 L35,10 L37,10 L37,18 L15,18 L15,10 L17,10 Z M26,2 C29.52,2 32.44,4.61 32.93,8 L19.07,8 C19.56,4.61 22.48,2 26,2 L26,2 Z M45,8 L39,8 L34.94,8 C34.44,3.51 30.625,0 26,0 C21.375,0 17.56,3.51 17.06,8 L13,8 L7,8 C3.14,8 0,11.14 0,15 L0,53 C0,56.86 3.14,60 7,60 L45,60 C48.86,60 52,56.86 52,53 L52,15 C52,11.14 48.86,8 45,8 L45,8 Z'></path>
      </g>
    </svg>
  )
}

AllSet.defaultProps = {
  color: 'blue',
  styles: {}
}

AllSet.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
