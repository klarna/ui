import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

export const renderer = (Component) => (props = {}) => {
  return shallow(Component, props).getRenderOutput()
}

export const shallow = (Component, props = {}) => {
  const shallowRenderer = createRenderer()
  shallowRenderer.render(<Component {...props} />)
  return shallowRenderer
}
