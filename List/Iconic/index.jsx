import React from 'react'
import PropTypes from 'prop-types'
import * as Paragraph from '../../Paragraph'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import childrenPropType from '../../propTypes/children'

const baseClass = 'list--iconic'

const classes = {
  content: `${baseClass}--item__content`,
  item: `${baseClass}--item`,
  itemIcon: `${baseClass}--item__icon`,
  itemText: `${baseClass}--item__text`,
  wrapper: `${baseClass}--wrapper`
}

export function Wrapper ({className, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <ul className={classNames(classes.wrapper, className)} {...props}>
    {children}
  </ul>
}

Wrapper.displayName = 'List.Iconic.Wrapper'

Wrapper.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  id: PropTypes.string,
  styles: PropTypes.object
}

export function Item ({className, icon, id, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})
  const ids = id
    ? {
      tbody: `${id}__tbody`,
      tr: `${id}__tr`,
      icon: `${id}__icon`,
      contentTd: `${id}__content-td`,
      content: `${id}__content`
    } : {}

  return <div
    className={classNames(classes.item)}
    id={id}
    {...props}>
    <tbody id={ids.tbody}>
      <tr id={ids.tr}>
        <td
          className={classNames(classes.itemIcon)}
          id={ids.icon}>
          {icon}
        </td>
        <td
          className={classNames(classes.itemText)}
          id={ids.contentTd}>
          <Paragraph.Secondary id={ids.content}>
            {children}
          </Paragraph.Secondary>
        </td>
      </tr>
    </tbody>
  </div>
}

Item.displayName = 'List.Iconic.Item'

Item.propTypes = {
  className: PropTypes.string,
  children: childrenPropType,
  icon: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.object
}
