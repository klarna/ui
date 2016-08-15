import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'

const baseClass = 'subtitle'

export default function Subtitle ({
  children,
  className,
  color,
  condensed,
  margins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(
    baseClass,
    color,
    {
      condensed,
      'default-margins': margins
    },
    className
  )

  return (
    <h3 className={cls} {...props}>
      {children}
    </h3>
  )
}

Subtitle.defaultProps = {
  color: 'black',
  condensed: false,
  margins: false
}

Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  margins: PropTypes.bool,
  styles: PropTypes.object
}
