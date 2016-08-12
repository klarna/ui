import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

export function Main ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('dialog', className)} {...props}>
      {children}
    </div>
  )
}

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

export function Icon ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('dialog__icon', className)} {...props}>
      {children}
    </div>
  )
}

Icon.displayName = 'Dialog.Icon'

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}


export function Content ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames('dialog__content', className)} {...props}>
      <div className={classNames('dialog__content--inner')}>
        {children}
      </div>
    </div>
  )
}

Content.displayName = 'Dialog.Content'

Content.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

export function Footer ({ children, className, styles, ...props }) {
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

Footer.displayName = 'Dialog.Footer'

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

export function Overlay ({ children, className, show, styles, ...props }) {
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

Overlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool,
  styles: PropTypes.object
}
