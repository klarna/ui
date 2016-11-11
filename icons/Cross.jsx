import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import colors from './constants/colors'

export default function Cross ({ color, styles, className, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return <svg
    className={classNames('illustration', 'tiny', color, className)}
    strokeLinecap='round'
    strokeWidth='2'
    viewBox='0 0 25 25'
    height='20px'
    width='20px'>
    <line x1='6' x2='19' y1='6' y2='19'
      className={classNames('illustration__stroke')} />
    <line x1='19' x2='6' y1='6' y2='19'
      className={classNames('illustration__stroke')} />
  </svg>
}

Cross.defaultProps = {
  color: 'blue',
  styles: {}
}

Cross.propTypes = {
  color: PropTypes.oneOf(colors),
  styles: PropTypes.object
}
