import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import compose from '../lib/compose'
import defaultStyles from './styles.scss'
import themeable from '../decorators/themeable'
import overridable from '../decorators/overridable'

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

function DialogMain ({ children, className, customize, style, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const dynamicStyles = customize
  ? {
    borderRadius: customize.borderRadius
  } : {}

  return (
    <div
      style={{
        ...dynamicStyles,
        ...style
      }}
      className={classNames(baseClass, className)} {...props}>
      {children}
    </div>
  )
}

DialogMain.displayName = 'Dialog.Main'

DialogMain.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  styles: PropTypes.object
}

export const Main = compose(
  themeable(function (customizations, props) {
    return {
      customize: {
        ...props.customize,
        borderRadius: customizations.radius_border
      }
    }
  }),
  overridable(defaultStyles)
)(DialogMain)

export function Icon ({ children, className, left, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.icon, { left }, className)}
      {...props}>
      {children}
    </div>
  )
}

Icon.displayName = 'Dialog.Icon'

Icon.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
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

export function Overlay ({ children, className, show, wide, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(classes.overlay, { 'is-visible': show, wide }, className)}
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
