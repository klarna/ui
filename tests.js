import React from 'react'
import { render } from 'react-dom'

import * as examples from './Showroom/examples'

const container = document.createElement('div')
container.id = 'container'

document.body.appendChild(container)

const getVariations = (section) =>
  section.variations
    .map((variation) =>
      Object.keys(variation)
        .filter((key) => key !== 'title')
        .map((key) => [key, variation[key].example || variation[key]]))
    .reduce((a, b) => a.concat(b), [])

describe('@klarna/ui', () => {
  Object.keys(examples).map((key) => examples[key]).forEach((example) => {
    describe(`loads ${example.title} examples`, () => {
      getVariations(example).forEach(([title, children]) => {
        it(title, () => {
          render(
            <div>
              {children}
            </div>
            , document.getElementById('container')
          )
        })
      })
    })
  })
})
