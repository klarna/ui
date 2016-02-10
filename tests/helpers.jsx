import React from 'react'
import { createRenderer } from 'react-addons-test-utils'

const shallow = createRenderer()
export const renderer = (Component) => (props = {}) => {
  shallow.render(<Component {...props} />)
  return shallow.getRenderOutput()
}
