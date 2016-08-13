import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'alert'

const designs = ['error']

export function Main ({ children, className, styles, design, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(`${baseClass}--${design}`, className)

  return (
    <div className={cls} {...remainingProps}>
      {children}
    </div>
  )
}

Main.displayName = 'Alert.Main'

Main.designs = designs

Main.defaultProps = {
  design: 'error',
  styles: {}
}

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(designs),
  styles: PropTypes.object
}

export function Title ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(`${baseClass}__title`, className)

  return (
    <h1 className={cls} {...remainingProps}>
      {children}
    </h1>
  )
}

Title.displayName = 'Alert.Title'

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
  const cls = classNames(`${baseClass}__paragraph`, className)

  return (
    <p className={cls} {...remainingProps}>
      {children}
    </p>
  )
}

Paragraph.displayName = 'Alert.Paragraph'

Paragraph.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  design: PropTypes.oneOf(designs),
  styles: PropTypes.object
}

Paragraph.defaultProps = {
  styles: {}
}
