import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const designs = ['error']

export function Title ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('alert__title', className)

  return (
    <h1 className={cls} {...remainingProps}>
      {children}
    </h1>
  )
}

Title.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(designs),
  styles: PropTypes.object
}

Title.defaultProps = {
  styles: {}
}

export function Paragraph ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames('alert__paragraph', className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(designs),
  styles: PropTypes.object
}

Paragraph.defaultProps = {
  styles: {}
}

export default function Alert ({ children, className, styles, design, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(`alert--${design}`, className)

  return (
    <div className={cls} {...remainingProps}>
      {children}
    </div>
  )
}

Alert.designs = designs

Alert.defaultProps = {
  design: 'error',
  styles: {}
}

Alert.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(designs),
  styles: PropTypes.object
}
