import React from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'backdrop'

const classes = {
  smoke: `${baseClass}__smoke`
}

export default function Backdrop ({children, styles, ...props}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <div className={classNames(baseClass)} {...props}>
    <div className={classNames(classes.smoke)}>
      {children}
    </div>
  </div>
}
