import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import compose from '../lib/compose'

import themeable from '../decorators/themeable'

const baseClass = 'checklist'

const classes = {
  item: `${baseClass}__item`,
  checkmark: `${baseClass}__checkmark`
}

function ChecklistMain ({ chromeless, className, children, customize, style, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const dynamicStyles = customize
    ? {
      borderRadius: customize.borderRadius,
      borderColor: customize.borderColor
    } : {}

  return <ul
    style={{
      ...dynamicStyles,
      ...style
    }}
    className={classNames(baseClass, { chromeless }, className)}>
    {children}
  </ul>
}

ChecklistMain.displayName = 'Checklist.Main'

ChecklistMain.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  chromeless: PropTypes.bool,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    borderColor: PropTypes.string.isRequired,
    borderRadius: PropTypes.string.isRequired
  })
}

export const Main = compose(
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      borderColor: customizations.color_border,
      borderRadius: customizations.radius_border
    }
  }))
)(ChecklistMain)

function ChecklistItem ({ className, children, customize, styles }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const listItemDynamicStyles = customize
    ? { color: customize.textColor }
    : undefined
  const iconDynamicStyles = customize
    ? { stroke: customize.strokeColor }
    : undefined

  return <li
    className={classNames(classes.item, className)}
    style={listItemDynamicStyles}>
    <svg
      className={classNames(classes.checkmark)}
      style={iconDynamicStyles}
      viewBox='0 0 25 25'
      aria-labelledby='Checkmark'
      height='20px'
      width='20px'>
      <path d='M5 13.69l4.49 4.23L19.37 8'></path>
    </svg>
    {children}
  </li>
}

ChecklistItem.displayName = 'Checklist.Item'

ChecklistItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  styles: PropTypes.object,
  customize: PropTypes.shape({
    strokeColor: PropTypes.string.isRequired,
    textColor: PropTypes.string.isRequired
  })
}

export const Item = compose(
  themeable((customizations, props) => ({
    customize: {
      ...props.customize,
      strokeColor: customizations.color_details,
      textColor: customizations.color_text
    }
  }))
)(ChecklistItem)
