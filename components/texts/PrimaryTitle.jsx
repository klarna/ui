import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

export default function PrimaryTitle ({ className, color, small, strong, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames('cui__title--primary', color, className, {
    small,
    strong
  })

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
  styles: {}
}

PrimaryTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  small: PropTypes.bool,
  strong: PropTypes.bool,
  styles: PropTypes.object
}
