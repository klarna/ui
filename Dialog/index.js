import React from 'react'
import deepMerge from 'deepmerge'
import defaultStyles from './styles'

export default function Dialog ({children, styles, ...props}) {
  const finalStyles = deepMerge(defaultStyles, styles)

  return <div style={finalStyles.base.dialog}>
    {children}
  </div>
}
