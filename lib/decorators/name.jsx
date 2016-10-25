import React from 'react'
import uniqueName from '../uniqueComponentName'

const componentProps = (Component, props) => ({
  name: uniqueName(Component),
  ...props
})

export default (Component) => (props) => (
  <Component {...componentProps(Component, props)} />
)
