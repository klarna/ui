import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import contains from '../lib/contains'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

const baseClass = 'preview'

const classes = {
  content: `${baseClass}__content`,
  footer: `${baseClass}__footer`,
  footerLink: `${baseClass}__footer__link`,
  title: `${baseClass}__title`
}

export function Main ({ className, children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    baseClass,
    { 'has-link': contains(Link, children) },
    className
  )

  return (
    <div className={cls} {...props}>
      {children}
    </div>
  )
}

Main.displayName = 'Preview.Main'

Main.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Content ({children, className, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <div className={classNames(classes.content)} {...props}>
      {children}
    </div>
  )
}

Content.displayName = 'Preview.Content'

Content.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Title ({children, className, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <h2 className={classNames(classes.title, className)} {...props}>
      {children}
    </h2>
  )
}

Title.displayName = 'Preview.Title'

Title.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Link ({children, className, id, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      link: `${id}__link`
    } : {}

  return (
    <div className={classNames(classes.footer)} id={id}>
      <a
        className={classNames(classes.footerLink, className)}
        id={ids.link}
        {...props}>
        {children}
      </a>
    </div>
  )
}

Link.displayName = 'Preview.Link'

Link.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}
