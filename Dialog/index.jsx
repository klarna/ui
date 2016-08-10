import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export default function Dialog ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('dialog', className)} {...props}>
      {children}
    </div>
  )
}

Dialog.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

Dialog.Icon = ({ children, className, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('dialog__icon', className)} {...props}>
      {children}
    </div>
  )
}

Dialog.Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

Dialog.Icon.displayName = 'Dialog.Icon'

Dialog.Content = ({ children, className, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('dialog__content', className)} {...props}>
      <div className={classNames('dialog__content--inner')}>
        {children}
      </div>
    </div>
  )
}

Dialog.Content.displayName = 'Dialog.Content'

Dialog.Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

Dialog.Footer = ({ children, className, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames('dialog__footer', className)} {...props}>
      <div
        className={classNames('dialog__footer--inner')}>
        {children}
      </div>
    </div>
  )
}

Dialog.Footer.displayName = 'Dialog.Footer'

Dialog.Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

Dialog.Overlay = ({ children, className, show, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames('dialog__overlay', { 'is-visible': show }, className)}>
      <div
        className={classNames('dialog__table')}>
        <div
          className={classNames('dialog__cell')}>
          {children}
        </div>
      </div>
    </div>
  )
}

Dialog.Overlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool,
  styles: PropTypes.object
}
