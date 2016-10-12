import React from 'react'
import deprecate from '../lib/deprecate'

export default (Component, componentName, replacement, reference) => (props) => {
  deprecate({
    name: componentName || Component.displayName || Component.name,
    replacement, 
    reference
  })

  return <Component {...props} />
}
