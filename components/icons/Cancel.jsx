import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Cancel ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 21 21'
      {...props}>
      <circle
        className={classNames('cui__illustration__stroke')}
        cx='10.5'
        cy='10.5'
        r='7'
      />
      <g
        className={classNames('cui__illustration__fill')}
        transform='translate(3, 3)'>
        <path d='M10.8535,4.1465 C10.6585,3.9515 10.3415,3.9515 10.1465,4.1465 L7.4995,6.7925 L4.8535,4.1465 C4.6585,3.9515 4.3415,3.9515 4.1465,4.1465 C3.9515,4.3415 3.9515,4.6585 4.1465,4.8535 L6.7925,7.5005 L4.1465,10.1465 C3.9515,10.3415 3.9515,10.6585 4.1465,10.8535 C4.2445,10.9515 4.3725,11.0005 4.4995,11.0005 C4.6275,11.0005 4.7555,10.9515 4.8535,10.8535 L7.4995,8.2075 L10.1465,10.8535 C10.2445,10.9515 10.3725,11.0005 10.4995,11.0005 C10.6275,11.0005 10.7555,10.9515 10.8535,10.8535 C11.0485,10.6585 11.0485,10.3415 10.8535,10.1465 L8.2075,7.5005 L10.8535,4.8535 C11.0485,4.6585 11.0485,4.3415 10.8535,4.1465' />
      </g>
    </svg>
  )
}

Cancel.defaultProps = {
  color: 'blue',
  styles: {}
}

Cancel.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
