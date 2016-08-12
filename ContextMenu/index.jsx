import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'context-menu'

export function Main ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <ol className={classNames(baseClass, className)} {...props}>
      {children}
    </ol>
  )
}
Main.displayName = 'ContextMenu.Main'

export function Link ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li>
      <a className={classNames(`${baseClass}__item`, className)} {...props}>
        {children}
      </a>
    </li>
  )
}
Link.displayName = 'ContextMenu.Link'

export function Item ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li className={classNames(`${baseClass}__item`, className)} {...props}>
    {children}
    </li>
  )
}
Item.displayName = 'ContextMenu.Item'

Main.propTypes = Link.propTypes = Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

export function Separator ({ className, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li className={classNames(`${baseClass}__separator`, className)} {...props} />
  )
}
Separator.displayName = 'ContextMenu.Separator'

Separator.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object
}

export function Icon ({ className, children, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    React.cloneElement(React.Children.only(children), {
      className: classNames(`${baseClass}__icon`, className)
    })
  )
}
Icon.displayName = 'ContextMenu.Icon'

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  styles: PropTypes.object
}
