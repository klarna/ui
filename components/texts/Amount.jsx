import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'
import palette from './palette'

const classNames = classNamesBind.bind(styles)

export default function Amount ({ children, className, color, ...remainingProps }) {
  const cls = classNames('cui__amount-text', color, className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Amount.defaultProps = {
  color: 'black'
}

Amount.propTypes = {
  color: PropTypes.oneOf(palette),
  children: PropTypes.node,
  className: PropTypes.string
}
