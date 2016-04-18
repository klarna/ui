import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function TextLabel (props) {
  const {
    className,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__text-label', className)

  return (
    <h4 className={cls} {...remainingProps}>{children}</h4>
  )
}

TextLabel.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}
