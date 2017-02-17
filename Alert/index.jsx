import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

const baseClass = 'alert'

const classes = {
  error: `${baseClass}--error`,
  paragraph: `${baseClass}__paragraph`,
  title: `${baseClass}__title`,
  warning: `${baseClass}--warning`
}

export function Error ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.error, className)}
      {...remainingProps}>
      {children}
    </div>
  )
}

Error.displayName = 'Alert.Error'

Error.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Warning ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.warning, className)}
      {...remainingProps}>
      {children}
    </div>
  )
}

Warning.displayName = 'Alert.Warning'

Warning.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Title ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <h1
      className={classNames(classes.title, className)}
      {...remainingProps}>
      {children}
    </h1>
  )
}

Title.displayName = 'Alert.Title'

Title.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Paragraph ({ children, className, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <p
      className={classNames(classes.paragraph, className)}
      {...remainingProps}>
      {children}
    </p>
  )
}

Paragraph.displayName = 'Alert.Paragraph'

Paragraph.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}
