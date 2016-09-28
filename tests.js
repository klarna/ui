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
  Object
    .keys(examples.components)
    .map((key) => examples.components[key])
    .forEach((example) => {
      describe(`loads ${example.title} component examples`, () => {
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

  Object
    .keys(examples.templates)
    .map((key) => examples.templates[key])
    .forEach((example) => {
      describe(`loads ${example.title} template examples`, () => {
        getVariations(example).forEach(([title, children]) => {
          it(title, () => {
            render(
              <div>
                {children.inline}
                {children.wrapped}
              </div>
              , document.getElementById('container')
            )
          })
        })
      })
    })
})
