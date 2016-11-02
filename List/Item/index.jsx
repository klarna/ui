import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import defaultStyles from '../styles.scss'

const baseClass = 'list__item'

const classes = {
  bulletUnordered: `${baseClass}__bullet--unordered`
}

function Item ({className, children, color, condensed, secondary, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <li className={classNames(baseClass, color, { condensed }, { secondary }, className)} {...props}>
      <div className={classNames(classes.bulletUnordered)} />
      {children}
    </li>
  )
}

Item.displayName = 'List.Item'

Item.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string,
  condensed: PropTypes.bool,
  secondary: PropTypes.bool,
  style: PropTypes.object,
  styles: PropTypes.object
}

export default themeable(Item, (customizations, props) => ({
  style: {
    ...props.style,
    color: customizations.color_text
  }
}))
