import React from 'react'
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

export function Item ({className, icon, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <div className={classNames(classes.item)} {...props}>
    <tbody>
      <tr>
        <td className={classNames(classes.itemIcon)}>
          {icon}
        </td>
        <td>
          <Paragraph.Secondary>
            {children}
          </Paragraph.Secondary>
        </td>
      </tr>
    </tbody>
  </div>
}

Item.displayName = 'List.Iconic.Item'
