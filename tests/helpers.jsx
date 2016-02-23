import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

const shallow = createRenderer()
export const renderer = (Component) => (props = {}, children = {}) => {
  shallow.render(<Component {...props}>{ children }</Component>)
  return shallow.getRenderOutput()
}
