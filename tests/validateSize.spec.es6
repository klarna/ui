/* global describe it */

import validateSize from 'propTypes/validateSize'
import assert from 'assert'

const invalidSizes = [1, {}, [], '1.', '', 'px', '1p', '%', 'wrong', 'em2']
const validSizes = [undefined, '0', '5px', '100%', '3.5em', '12rem', '0ex', '7.55cm', '300mm', '2in', '10pt', '3pc', '11ch', '77vh', '0.4vw', '.1vmin', '.2vmax']

describe('validateSize', () => {
  invalidSizes.map((invalid) => {
    it(`rejects invalid size '${invalid}'`, () => {
      assert.deepEqual(
        validateSize({size: invalid}, 'size', 'Test'),
        new Error(`size '${invalid}' in Test is not valid.`)
      )
    })
  })

  validSizes.map((valid) => {
    it(`accepts valid size '${valid}'`, () => {
      assert(validateSize({size: valid}, 'size') === null)
    })
  })
})
