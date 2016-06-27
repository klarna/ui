import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/illustration.scss'
import colors from './constants/colors'

export default function Arrow ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <svg
      className={classNames('cui__illustration', 'tiny', color, className)}
      viewBox='0 0 21 21'
      {...props}>
      <path
        className={classNames('cui__illustration__stroke')}
        d='M6.5,9.3l4,4l4,-4'
        strokeLinecap='round' />
    </svg>
  )
}

Arrow.defaultProps = {
  color: 'blue',
  styles: {}
}

Arrow.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
