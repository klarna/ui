import React from 'react'
import classNamesBind from 'classnames/bind'
import deepMerge from 'deepmerge'
import defaultStyles from './styles'

const baseClass = 'dialog'

export default function Dialog ({className, children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.dialog}>
    {children}
  </div>
}
