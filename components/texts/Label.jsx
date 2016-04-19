import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function Label (props) {
  const {
    className,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__label', className)

  return (
    <span className={cls} {...remainingProps}>{children}</span>
  )
}

Label.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
