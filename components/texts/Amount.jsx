import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function Amount ({ children, className, white, ...remainingProps }) {
  const cls = classNames('cui__amount-text', { white }, className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Amount.propTypes = {
  blue: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
}
