import React, {Component} from 'react'
import defaultStyles from './styles'

export default function Backdrop ({className, styles, ...props}) {
  return <div
    style={{...defaultStyles.main, ...styles.main}}
    {...props}
  />
}
