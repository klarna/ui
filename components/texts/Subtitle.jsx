import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

export default function Subtitle ({
  children,
  className,
  color,
  condensed,
  defaultMargins,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(
    'cui__subtitle',
    color,
    className,
    {
      condensed,
      'default-margins': defaultMargins
    }
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
  defaultMargins: false,
  styles: {}
}

Subtitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  defaultMargins: PropTypes.bool,
  styles: PropTypes.object
}
