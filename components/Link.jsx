import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/link.scss'

const classNames = classNamesBind.bind(styles)

export default function Link ({className, children, ...remainingProps}) {
  const cls = classNames('cui__link', className)

  return <a className={cls} {...remainingProps}>{children}</a>
}

Link.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}
