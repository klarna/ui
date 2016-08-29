import React from 'react'
import { render } from 'react-dom'

import Alert from './Alert/example'

const container = document.createElement('div')
container.id = 'container'

document.body.appendChild(container)

describe('@klarna/ui', () => {
  it('loads Alert examples', () => {
    render(
      <div>
        {Alert.variations.map(({ Regular }) => Regular)}
      </div>
      , document.getElementById('container')
    )
  })
})
