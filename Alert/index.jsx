import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/alert.scss'

export function Title ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('cui__alert__title', className)

  return (
    <h1 className={cls} {...remainingProps}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Alert.designs),
  styles: PropTypes.object
}

Title.defaultProps = {
  styles: {}
}

export function Paragraph ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('cui__alert__paragraph', className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Alert.designs),
  styles: PropTypes.object
}

Paragraph.defaultProps = {
  styles: {}
}

export default function Alert ({ children, className, styles, design, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(`cui__alert--${design}`, className)

  return (
    <div className={cls} {...remainingProps}>
      {children}
    </div>
  )
}

Alert.designs = ['error']

Alert.defaultProps = {
  design: 'error',
  styles: {}
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(Alert.designs),
  styles: PropTypes.object
}
