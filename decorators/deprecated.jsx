import React from 'react'
import deprecate from '../lib/deprecate'

export default function (Component, componentName, replacement, reference) {
  return function (props) {
    deprecate({
      name: componentName || Component.displayName || Component.name,
      replacement,
      reference
    })

    return <Component {...props} />
  }
}
