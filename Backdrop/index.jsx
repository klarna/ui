import React, {Component} from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'backdrop'

export default function Backdrop ({className, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <div className={classNames(baseClass, className)} {...props} />
}
