import React from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'block--content'

export default function Content ({ children }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (<div className={classNames(baseClass)}>
    {children}
  </div>)
}
