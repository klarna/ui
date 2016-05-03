import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

export const renderer = (Component) => (props = {}, children = null) => (
  shallow(Component, props, children).getRenderOutput()
)

export const shallow = (Component, props = {}, children = null) => {
  const shallowRenderer = createRenderer()
  shallowRenderer.render(<Component {...props}>{children}</Component>)
  return shallowRenderer
}

export const instance = (Component) => (props = {}, children = null) => (
  shallow(Component, props, children)._instance._instance
)
