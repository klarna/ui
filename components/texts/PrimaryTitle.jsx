import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

export default function PrimaryTitle ({
  children,
  className,
  color,
  defaultMargins,
  small,
  strong,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(
    'cui__title--primary',
    color,
    className,
    {
      'default-margins': defaultMargins,
      small,
      strong
    }
  )

  return (
    <h1 className={cls} {...props}>
      {children}
    </h1>
  )
}

PrimaryTitle.defaultProps = {
  color: 'black',
  small: false,
  strong: false,
  defaultMargins: false,
  styles: {}
}

PrimaryTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  defaultMargins: PropTypes.bool,
  small: PropTypes.bool,
  strong: PropTypes.bool,
  styles: PropTypes.object
}
