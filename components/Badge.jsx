import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function Badge ({className, children, ...remainingProps}) {
  const cls = classNames('cui__label', className)

  return <span className={cls} {...remainingProps}>{children}</span>
}

Badge.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
