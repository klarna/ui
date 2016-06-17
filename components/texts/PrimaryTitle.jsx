import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

export default function PrimaryTitle ({
  children,
  className,
  color,
  margins,
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
      'default-margins': margins,
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
  margins: false,
  styles: {}
}

PrimaryTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  margins: PropTypes.bool,
  small: PropTypes.bool,
  strong: PropTypes.bool,
  styles: PropTypes.object
}
