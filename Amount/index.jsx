import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'

const baseClass = 'amount-text'

export default function Amount ({ children, className, color, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <p
      className={classNames(baseClass, color, className)}
      {...remainingProps}>
      {children}
    </p>
  )
}

Amount.defaultProps = {
  color: 'black',
  styles: {}
}

Amount.propTypes = {
  color: PropTypes.oneOf(palette),
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}
