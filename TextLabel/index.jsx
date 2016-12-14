import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import palette from '../lib/palette'

const baseClass = 'text-label'

export default function TextLabel ({
  className,
  children,
  color,
  margins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <h4
      className={classNames(baseClass, color, {'default-margins': margins}, className)}
      {...props}>
      {children}
    </h4>
  )
}

TextLabel.defaultProps = {
  margins: false,
  styles: {}
}

TextLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  id: PropTypes.string,
  margins: PropTypes.bool,
  styles: PropTypes.object
}
