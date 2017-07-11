import React from 'react'
import { render } from 'react-dom'
import { deepEqual } from 'assert'
import { compose, unnest, flip, keys, map, prop, values, pickBy } from 'ramda'
import { LIVE, LIVE_WIDE, MANUAL, TEMPLATE, SHOWCASE } from './Showroom/variationTypes'

import * as examples from './Showroom/examples'
import * as index from './index'

const container = document.createElement('div')
container.id = 'container'

document.body.appendChild(container)

const getEntries = compose(
  unnest,
  map(({type, example, examples}) => {
    switch (type) {
      case LIVE:
      case LIVE_WIDE:
        return compose(
          map((key) => [key, examples[key]]),
          keys
        )(examples)

      case MANUAL:
        return compose(

          map((key) => [key, examples[key].live]),
          keys
        )(examples)

      case TEMPLATE:
        return compose(
          map((key) => [key, examples[key].inline]),
          keys
        )(examples)

      case SHOWCASE:
        return [['Main', example]]
    }
  }),
  ({examples, variations}) => variations || [examples]
)

const createTests = compose(
  map((example) => {
    describe(`loads ${example.title} examples`, () => {
      compose(
        map(([title, children]) => {
          it(title, () => {
            render(
              <div>
                {children}
              </div>
              , document.getElementById('container')
            )
          })
        })
      )(getEntries(example))
    })
  }),
  values,
  flip(prop)(examples)
)

describe('@klarna/ui', () => {
  map(createTests, ['components', 'templates'])

  describe('index', () => {
    it('should not export undefined values', () => {
      deepEqual({}, pickBy((x) => !x, index))
    })
  })
})
