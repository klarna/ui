import React from 'react'
import { render } from 'react-dom'

import Alerts from './Alert/example'

describe('@klarna/ui', () => {
  it('loads Alert example', () => {
    render(<Alerts />, document.createElement('div'))
  })
})
