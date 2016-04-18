import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function PrimaryTitle (props) {
  const {
    className,
    blue,
    small,
    strong,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__title--primary', {
    blue,
    small,
    strong
  }, className)

  return (
    <h1 className={cls} {...remainingProps}>
      {children}
    </h1>
  )
}

PrimaryTitle.defaultProps = {
  blue: false,
  small: false,
  strong: false
}

PrimaryTitle.propTypes = {
  children: PropTypes.node,
  blue: PropTypes.bool,
  small: PropTypes.bool,
  strong: PropTypes.bool,
  className: PropTypes.string
}
