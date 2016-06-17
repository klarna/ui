import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Person ({ color, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color)}
      viewBox='0 0 21 21'
      {...props}>
      <circle
        className={classNames('cui__illustration__stroke')}
        cx='10.5'
        cy='6.5'
        r='3'
      />
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(4, 3)'>
        <path
          d='M9.49,14 C8.28,14 4.63,14 3.51,14 C1.63,14 1,13.43 1,12 C1,11.07 2.23,9.66 3.32,8.42 C3.42,8.3 3.55,8.25 3.69,8.25 C3.77,8.25 3.86,8.27 3.93,8.31 C5.55,9.18 7.5,9.17 9.11,8.28 C9.3,8.17 9.58,8.2 9.73,8.4 C10.53,9.3 12,11 12,12 C12,13.4 11.4,14 9.5,14 M10.5,7.73 C10,7.2 9.25,7.06 8.63,7.4 C7.3,8.1 5.73,8.14 4.41,7.43 C3.8,7.1 3,7.23 2.57,7.76 C1.25,9.27 0,10.7 0,11.96 C0,14.57 1.87,14.95 3.49,15 C4,15 5.17,15 6.33,15 C7.59,15 8.88,15 9.51,14.98 C11.13,14.96 13,14.59 13,12 C13,10.72 11.81,9.25 10.49,7.73' />
      </g>
    </svg>
  )
}

Person.defaultProps = {
  color: 'blue',
  styles: {}
}

Person.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
