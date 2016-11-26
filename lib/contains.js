import React from 'react'

export default function (Component, children) {
  return React.Children
    .toArray(children)
    .some(function (child) {
      return child.type === Component
    })
}
