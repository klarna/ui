import React, {PropTypes} from 'react'
import * as Paragraph from '../../Paragraph'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'list--iconic'

const classes = {
  content: `${baseClass}--item__content`,
  item: `${baseClass}--item`,
  itemIcon: `${baseClass}--item__icon`,
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
  children: PropTypes.node,
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
        <td id={ids.contentTd}>
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
  children: PropTypes.node,
  icon: PropTypes.node,
  id: PropTypes.string,
  styles: PropTypes.object
}
