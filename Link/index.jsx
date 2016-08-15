import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'

const baseClass = 'link'

export default function Link ({className, color, children, styles, customize, ...props}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <a
      className={classNames(baseClass, color, {'dynamic-styling': customize}, className)}
      style={customize && { color: customize.textColor }}
      {...props}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  customize: PropTypes.shape({
    textColor: PropTypes.string.isRequired
  }),
  styles: PropTypes.object
}
