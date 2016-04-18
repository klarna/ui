import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/text.scss'

const classNames = classNamesBind.bind(styles)

export default function Subtitle (props) {
  const {
    className,
    blue,
    condensed,
    children,
    ...remainingProps } = props

  const cls = classNames('cui__subtitle', {
    blue,
    condensed
  }, className)

  return (
    <h3 className={cls} {...remainingProps}>
      {children}
    </h3>
  )
}

Subtitle.defaultProps = {
  blue: false,
  condensed: false
}

Subtitle.propTypes = {
  white: PropTypes.bool
}
