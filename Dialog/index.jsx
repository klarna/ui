import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'dialog'

const classes = {
  cell: `${baseClass}__cell`,
  content: `${baseClass}__content`,
  contentInner: `${baseClass}__content--inner`,
  footer: `${baseClass}__footer`,
  footerInner: `${baseClass}__footer--inner`,
  icon: `${baseClass}__icon`,
  overlay: `${baseClass}__overlay`,
  table: `${baseClass}__table`
}

export function Main ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div className={classNames(baseClass, className)} {...props}>
      {children}
    </div>
  )
}

Main.displayName = 'Dialog.Main'

Main.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

export function Icon ({ children, className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.icon, className)}
      {...props}>
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
    <div
      className={classNames(classes.content, className)}
      {...props}>
      <div className={classNames(classes.contentInner)}>
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
      className={classNames(classes.footer, className)}
      {...props}>
      <div
        className={classNames(classes.footerInner)}>
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
      className={classNames(classes.overlay, { 'is-visible': show }, className)}
      {...props}>
      <div
        className={classNames(classes.table)}>
        <div
          className={classNames(classes.cell)}>
          {children}
        </div>
      </div>
    </div>
  )
}

Overlay.displayName = 'Dialog.Overlay'

Overlay.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  show: PropTypes.bool,
  styles: PropTypes.object
}
