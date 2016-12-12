import React from 'react'
import classNamesBind from 'classname/bind'
import defaultStyles from './styles.scss'

const baseClass = 'backdrop'

const classes = {
  smoke: `${baseClass}__smoke`
}

export default function Backdrop ({children, style, ...props}) {
  const classNames = classNameBind.bind({...defaultStyles, ...styles})

  return <div className={classNames(baseClass)}>
    <div className={classNames(classes.smoke)}>
      {children}
    </div>
  </div>
}
