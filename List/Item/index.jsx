import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import overridable from '../../decorators/overridable'
import compose from '../../lib/compose'
import defaultStyles from '../styles.scss'

const baseClass = 'list__item'

const classes = {
  bulletUnordered: `${baseClass}__bullet--unordered`
}

function Item ({className, children, color, condensed, id, secondary, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      bullet: `${id}__bullet`
    } : {}

  return (
    <li
      className={classNames(
        baseClass,
        color,
        {condensed},
        {secondary},
        className
      )}
      id={id}
      {...props}>
      <div
        className={classNames(classes.bulletUnordered)}
        id={ids.bullet}
      />
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

export default compose(
  themeable((customizations, props) => ({
    style: {
      ...props.style,
      color: customizations.color_text
    }
  })),
  overridable(defaultStyles)
)(Item)
