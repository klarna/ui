import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

const baseClass = 'context-menu'

const classes = {
  icon: `${baseClass}__icon`,
  item: `${baseClass}__item`,
  separator: `${baseClass}__separator`
}

export function Main ({className, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <ol className={classNames(baseClass, className)} {...props}>
      {children}
    </ol>
  )
}

Main.displayName = 'ContextMenu.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Link ({className, children, id, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      link: `${id}__link`
    } : {}

  return (
    <li id={id}>
      <a
        className={classNames(classes.item, className)}
        id={ids.link}
        {...props}>
        {children}
      </a>
    </li>
  )
}

Link.displayName = 'ContextMenu.Link'

Link.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Item ({className, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <li className={classNames(classes.item, className)} {...props}>
      {children}
    </li>
  )
}

Item.displayName = 'ContextMenu.Item'

Item.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Separator ({className, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <li
      className={classNames(classes.separator, className)}
      {...props}
    />
  )
}

Separator.displayName = 'ContextMenu.Separator'

Separator.propTypes = {
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Icon ({className, children, styles}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    React.cloneElement(React.Children.only(children), {
      className: classNames(classes.icon, className)
    })
  )
}

Icon.displayName = 'ContextMenu.Icon'

Icon.propTypes = {
  className: PropTypes.string,
  children: PropTypes.element,
  id: PropTypes.string,
  styles: PropTypes.object
}
