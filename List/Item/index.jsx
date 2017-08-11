import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import setDisplayName from 'recompose/setDisplayName'
import defaultStyles from '../styles.scss'
import childrenPropType from '../../propTypes/children'

import compose from 'ramda/src/compose'
import {withOverrideFromContext, withTheme} from '@klarna/higher-order-components'

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
  children: childrenPropType,
  color: PropTypes.string,
  condensed: PropTypes.bool,
  id: PropTypes.string,
  secondary: PropTypes.bool,
  style: PropTypes.object,
  styles: PropTypes.object
}

export default compose(
  setDisplayName('List.Item'),
  withTheme((customizations, {style}) => ({
    style: {
      color: customizations.color_text,
      ...style
    }
  })),
  withOverrideFromContext
)(Item)
