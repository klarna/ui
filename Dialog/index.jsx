import React from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'dialog'

export default function Dialog ({className, children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <div className={classNames(baseClass, className)}>
    {children}
  </div>
}
