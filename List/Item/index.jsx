import React from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'list--item'

export default function Item ({className, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return (
    <li className={classNames(baseClass, className)} {...props}>
      {children}
    </li>
  )
}

Item.displayName = 'List.Item'
