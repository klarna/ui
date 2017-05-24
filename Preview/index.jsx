import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import contains from '../lib/contains'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

import compose from 'ramda/src/compose'
import { overridable, themeable } from '@klarna/higher-order-components'

const baseClass = 'preview'

const classes = {
  content: `${baseClass}__content`,
  footer: `${baseClass}__footer`,
  footerLink: `${baseClass}__footer__link`,
  title: `${baseClass}__title`
}

function PreviewMain ({ className, children, customize, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(
    baseClass,
    { 'has-link': contains(Link, children) },
    className
  )

  const dynamicStyles = customize
    ? {
      borderColor: customize.borderColor,
      borderRadius: customize.borderRadius
    } : {}

  return (
    <div
      className={cls}
      style={{...dynamicStyles}}
      {...props}
    >
      {children}
    </div>
  )
}

PreviewMain.displayName = 'Preview.Main'

PreviewMain.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Main = compose(
  themeable((customizations, {customize}) => ({
    customize: {
      borderColor: customizations.color_border,
      borderRadius: customizations.radius_border,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(PreviewMain)

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

function PreviewLink ({children, className, customize, id, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      link: `${id}__link`
    } : {}

  const dynamicStyles = customize
    ? {
      color: customize.linkColor
    } : {}

  return (
    <div className={classNames(classes.footer)} id={id}>
      <a
        className={classNames(classes.footerLink, className)}
        style={{...dynamicStyles}}
        id={ids.link}
        {...props}>
        {children}
      </a>
    </div>
  )
}

PreviewLink.displayName = 'Preview.Link'

PreviewLink.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    linkColor: PropTypes.string.isRequired
  })
}

export const Link = compose(
  themeable((customizations, {customize}) => ({
    customize: {
      linkColor: customizations.color_link,
      ...customize
    }
  })),
  overridable(defaultStyles)
)(PreviewLink)
