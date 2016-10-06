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

export function Wrapper ({className, children, styles}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <ul className={classNames(classes.wrapper)}>
    {children}
  </ul>
}

Wrapper.displayName = 'List.Iconic.Wrapper'

export function Item ({icon, children, styles}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <li className={classNames(classes.item)}>
    <div className={classNames(classes.itemIcon)}>
      {icon}
    </div>

    <div className={classNames(classes.content)}>
      <Paragraph.Secondary>
        {children}
      </Paragraph.Secondary>
    </div>
  </li>
}

Item.displayName = 'List.Iconic.Item'
