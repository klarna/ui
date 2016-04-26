import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

const classNames = classNamesBind.bind(styles)

export default function PrimaryTitle ({ className, color, small, strong, children, ...props }) {
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
  strong: false
}

PrimaryTitle.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette),
  small: PropTypes.bool,
  strong: PropTypes.bool
}
