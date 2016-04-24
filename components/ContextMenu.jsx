import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/context-menu.scss'

const classNames = classNamesBind.bind(styles)
const baseClass = 'cui__context-menu'

const ContextMenu = ({ className, children, ...props }) => (
  <ol className={classNames(baseClass, className)} {...props}>
    {children}
  </ol>
)

ContextMenu.Link = ({ className, children, ...props }) => (
  <li>
    <a className={classNames(`${baseClass}__item`, className)} {...props}>
      {children}
    </a>
  </li>
)
ContextMenu.Link.displayName = 'ContextMenu.Link'

ContextMenu.Item = ({ className, children, ...props }) => (
  <li className={classNames(`${baseClass}__item`, className)} {...props}>
    {children}
  </li>
)
ContextMenu.Item.displayName = 'ContextMenu.Item'

ContextMenu.Separator = ({ className, ...props }) => (
  <li className={classNames(`${baseClass}__separator`, className)} {...props} />
)
ContextMenu.Separator.displayName = 'ContextMenu.Separator'
ContextMenu.Separator.propTypes = {
  className: PropTypes.string
}

ContextMenu.Icon = ({ className, children }) => (
  React.cloneElement(React.Children.only(children), {
    className: classNames(`${baseClass}__icon`, className)
  })
)
ContextMenu.Icon.displayName = 'ContextMenu.Icon'

ContextMenu.propTypes = ContextMenu.Link.propTypes = ContextMenu.Item.propTypes = ContextMenu.Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element
}

export default ContextMenu
