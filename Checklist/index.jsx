import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import setDisplayName from 'recompose/setDisplayName'
import defaultStyles from './styles.scss'
import childrenPropType from '../propTypes/children'

import compose from 'ramda/src/compose'
import { withOverrideFromContext, withTheme } from '@klarna/higher-order-components'

const baseClass = 'checklist'

const classes = {
  item: `${baseClass}__item`,
  checkmark: `${baseClass}__checkmark`,
  footer: `${baseClass}__footer`
}

function ChecklistMain ({ chromeless, className, children, title, customize, style, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const dynamicStyles = customize
    ? {
      borderRadius: customize.borderRadius,
      borderColor: customize.borderColor
    } : {}

  return <div
    style={{
      ...dynamicStyles,
      ...style
    }}
    className={classNames(baseClass, { chromeless }, className)}
  >
    <ul
      {...props}>
      {title && <h1>{title}</h1>}
      {children}
    </ul>
  </div>
}

ChecklistMain.displayName = 'Checklist.Main'

ChecklistMain.propTypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  children: childrenPropType,
  chromeless: PropTypes.bool,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    borderColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
  })
}

export const Main = compose(
  setDisplayName('Checklist.Main'),
  withTheme((customizations, props) => ({
    customize: {
      ...props.customize,
      borderColor: customizations.color_border,
      borderRadius: customizations.radius_border
    }
  })),
  withOverrideFromContext
)(ChecklistMain)

function ChecklistItem ({ className, children, customize, id, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const listItemDynamicStyles = customize
    ? { color: customize.textColor }
    : undefined
  const iconDynamicStyles = customize
    ? { stroke: customize.strokeColor }
    : undefined
  const ids = id
    ? {
      checkmark: `${id}__checkmark`
    } : {}

  return <li
    className={classNames(classes.item, className)}
    id={id}
    style={listItemDynamicStyles}
    {...props}>
    <svg
      focusable='false'
      className={classNames(classes.checkmark)}
      id={ids.checkmark}
      style={iconDynamicStyles}
      viewBox='0 0 25 25'
      aria-labelledby='Checkmark'
      height='20px'
      width='20px'>
      <path d='M5 13.69l4.49 4.23L19.37 8' />
    </svg>
    {children}
  </li>
}

ChecklistItem.displayName = 'Checklist.Item'

ChecklistItem.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    strokeColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  })
}

export const Item = compose(
  setDisplayName('Checklist.Item'),
  withTheme((customizations, { customize }) => ({
    customize: {
      strokeColor: customizations.color_details,
      textColor: customizations.color_text,
      ...customize
    }
  })),
  withOverrideFromContext
)(ChecklistItem)

function ChecklistFooter ({ className, children, customize, id, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const listFooterDynamicStyles = customize
    ? { color: customize.textColor }
    : undefined

  return <div
    className={classNames(classes.footer, className)}
    id={id}
    style={listFooterDynamicStyles}
    {...props}>
    {children}
  </div>
}

ChecklistFooter.displayName = 'Checklist.Footer'

ChecklistFooter.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object,
  customize: PropTypes.object
}

export const Footer = compose(
  setDisplayName('Checklist.Footer'),
  withTheme((customizations, { customize }) => ({
    customize: {
      ...customize
    }
  })),
  withOverrideFromContext
)(ChecklistFooter)
