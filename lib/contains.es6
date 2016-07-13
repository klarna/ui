import React from 'react'

export default (Component, children) =>
  React.Children.toArray(children).some((child) =>
    child.type === Component
  )

