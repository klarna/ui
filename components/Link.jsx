import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/link.scss'
import palette from './texts/palette'

const classNames = classNamesBind.bind(styles)

export default function Link ({className, color, children, ...props}) {
  const cls = classNames('cui__link', color, className)

  return (
    <a className={cls} {...props}>
      {children}
    </a>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(palette)
}
