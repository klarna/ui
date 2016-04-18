import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function SecondaryTitle (props) {
  const {
    className,
    blue,
    condensed,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__title--secondary', {
    blue,
    condensed
  }, className)

  return (
    <h2 className={cls} {...remainingProps}>
      {children}
    </h2>
  )
}

SecondaryTitle.defaultProps = {
  blue: false,
  condensed: false
}

SecondaryTitle.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  condensed: PropTypes.bool,
  className: PropTypes.string
}
