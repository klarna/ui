import React from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'block--content'

export default function Content ({ children, styles, ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (<div className={classNames(baseClass)} {...props}>
    {children}
  </div>)
}

Content.displayName = 'Block.Content'
