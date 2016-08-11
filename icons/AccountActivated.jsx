import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function AccountActivated ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'big', color, className)}
      viewBox='0 0 100 100'
      {...props}>
      <g transform='translate(28, 14)'>
        <path
          className={classNames('cui__illustration__fill')}
          d='M43.809,57 C43.809,63.168 39.167,68 33.243,68 L14.243,68 C8.045,68 2.809,62.963 2.809,57 L2.809,42 L43.809,42 L43.809,57 Z M7.809,33 C7.809,25.149 14.609,19 23.29,19 L24.196,19 C32.663,19 38.809,24.888 38.809,33 C38.809,33.553 39.256,34 39.809,34 C40.362,34 40.809,33.553 40.809,33 C40.809,23.729 33.822,17 24.196,17 L23.29,17 C13.488,17 5.809,24.028 5.809,33 L5.809,40 L0.809,40 L0.809,57 C0.809,64.047 6.96,70 14.243,70 L33.243,70 C40.29,70 45.809,64.29 45.809,57 L45.809,40 L7.809,40 L7.809,33 Z' />
      </g>
      <g className={classNames('cui__illustration__stroke')} strokeWidth='2' strokeLinecap='round'>
        <line
          x1='75.1' y1='24.8' x2='69.7' y2='30.2' />
        <line
          x1='28.9' y1='24.8' x2='34.3' y2='30.2' />
        <line
          x1='51.8' y1='15' x2='51.8' y2='23' />
        <path
          d='M 43 70.4 l 5.6 5.4 l 13.2 -13.3' />
      </g>
    </svg>
  )
}

AccountActivated.defaultProps = {
  color: 'blue',
  styles: {}
}

AccountActivated.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
