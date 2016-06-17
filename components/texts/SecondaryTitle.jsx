import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

export default function SecondaryTitle ({
  className,
  color,
  condensed,
  children,
  margins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(
    'cui__title--secondary',
    color,
    className,
    {
      condensed,
      'default-margins': margins
    }
  )

  return (
    <h2 className={cls} {...props}>
      {children}
    </h2>
  )
}

SecondaryTitle.defaultProps = {
  color: 'black',
  condensed: false,
  margins: false,
  styles: {}
}

SecondaryTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  condensed: PropTypes.bool,
  margins: PropTypes.bool,
  styles: PropTypes.object
}
