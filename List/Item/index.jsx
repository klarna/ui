import React from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import defaultStyles from '../styles.scss'

const baseClass = 'list__item'

const classes = {
  bulletUnordered: `${baseClass}__bullet--unordered`
}

function Item ({className, children, color, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <li className={classNames(baseClass, color, className)} {...props}>
      <div className={classNames(classes.bulletUnordered)} />
      {children}
    </li>
  )
}

Item.displayName = 'List.Item'

export default themeable(Item, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text
  }
}))
