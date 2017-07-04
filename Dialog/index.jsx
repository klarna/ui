import React from 'react'
import classNamesBind from 'classnames/bind'
import compose from 'ramda/src/compose'
import PropTypes from 'prop-types'
import defaultStyles from './styles.scss'
import {withTheme, withOverrideFromContext} from '@klarna/higher-order-components'
import childrenPropType from '../propTypes/children'

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

function DialogMain ({children, className, customize, style, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

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
      className={classNames(baseClass, className)}
      {...props}>
      {children}
    </div>
  )
}

DialogMain.displayName = 'Dialog.Main'

DialogMain.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export const Main = compose(
  withTheme((customizations, {customize}) => ({
    customize: {
      borderRadius: customizations.radius_border,
      ...customize
    }
  })),
  withOverrideFromContext
)(DialogMain)

export function Icon ({children, className, left, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

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
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  left: PropTypes.bool,
  styles: PropTypes.object
}

export function Content ({children, className, id, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      inner: `${id}__inner`
    } : {}

  return (
    <div
      className={classNames(classes.content, className)}
      id={id}
      {...props}>
      <div
        className={classNames(classes.contentInner)}
        id={ids.inner}>
        {children}
      </div>
    </div>
  )
}

Content.displayName = 'Dialog.Content'

Content.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Footer ({children, className, id, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      inner: `${id}__inner`
    } : {}

  return (
    <div
      className={classNames(classes.footer, className)}
      id={id}
      {...props}>
      <div
        className={classNames(classes.footerInner)}
        id={ids.inner}>
        {children}
      </div>
    </div>
  )
}

Footer.displayName = 'Dialog.Footer'

Footer.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Overlay ({
  children,
  className,
  id,
  show,
  styles,
  wide,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      cell: `${id}__cell`,
      table: `${id}__table`
    } : {}

  return (
    <div
      className={classNames(classes.overlay, { 'is-visible': show, wide }, className)}
      id={id}
      {...props}>
      <div
        className={classNames(classes.table)}
        id={ids.table}>
        <div
          className={classNames(classes.cell)}
          id={ids.cell}>
          {children}
        </div>
      </div>
    </div>
  )
}

Overlay.displayName = 'Dialog.Overlay'

Overlay.propTypes = {
  children: childrenPropType,
  className: PropTypes.string,
  id: PropTypes.string,
  show: PropTypes.bool,
  styles: PropTypes.object
}
