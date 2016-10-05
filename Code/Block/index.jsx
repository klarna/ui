import React from 'react'
import Highlight from '../Highlight'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'code--block'

export default function Block ({
  className,
  children,
  language,
  standalone,
  styles,
  ...props
}) {
  const classNames = classNamesBind.bind({...defaultStyles, ...styles})

  return <div
    className={classNames(baseClass, {standalone}, className)} {...props}>
    <Highlight language={language}>{children}</Highlight>
  </div>
}
