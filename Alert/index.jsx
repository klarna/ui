import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'alert'

const designs = ['error']

export function Main ({ children, className, styles, design, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(`${baseClass}--${design}`, className)}
      {...remainingProps}>
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

  return (
    <h1
      className={classNames(`${baseClass}__title`, className)}
      {...remainingProps}>
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

  return (
    <p
      className={classNames(`${baseClass}__paragraph`, className)}
      {...remainingProps}>
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
