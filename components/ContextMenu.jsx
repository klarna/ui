import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/context-menu.scss'

const baseClass = 'cui__context-menu'

const ContextMenu = ({ className, children, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <ol className={classNames(baseClass, className)} {...props}>
      {children}
    </ol>
  )
}

ContextMenu.Link = ({ className, children, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li>
      <a className={classNames(`${baseClass}__item`, className)} {...props}>
        {children}
      </a>
    </li>
  )
}
ContextMenu.Link.displayName = 'ContextMenu.Link'

ContextMenu.Item = ({ className, children, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li className={classNames(`${baseClass}__item`, className)} {...props}>
    {children}
    </li>
  )
}
ContextMenu.Item.displayName = 'ContextMenu.Item'

ContextMenu.propTypes = ContextMenu.Link.propTypes = ContextMenu.Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object
}

ContextMenu.Separator = ({ className, styles, ...props }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <li className={classNames(`${baseClass}__separator`, className)} {...props} />
  )
}
ContextMenu.Separator.displayName = 'ContextMenu.Separator'
ContextMenu.Separator.propTypes = {
  className: PropTypes.string,
  styles: PropTypes.object
}

ContextMenu.Icon = ({ className, children, styles }) => {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    React.cloneElement(React.Children.only(children), {
      className: classNames(`${baseClass}__icon`, className)
    })
  )
}
ContextMenu.Icon.displayName = 'ContextMenu.Icon'
ContextMenu.Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  styles: PropTypes.object
}

export default ContextMenu
