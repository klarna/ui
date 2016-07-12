import fieldSizeFraction, { FIELD_SIZE_ERRORS } from '../../propTypes/fieldSizeFraction'
import { equal } from 'assert'

describe('fieldSizeFraction', () => {
  describe('random text', () => {
    it('returns an error', () => (
      equal(
        fieldSizeFraction(3)({ fraction: 'asdfa' }, 'fraction', 'Field').message,
        "Invalid prop `fraction` supplied to `Field`: needs to be a fraction, such as `1/3`"
      )
    ))
  })

  describe('floats in the values', () => {
    it('returns an error', () => (
      equal(
        fieldSizeFraction(3)({ fraction: '1.3/6' }, 'fraction', 'Field').message,
        "Invalid prop `fraction` supplied to `Field`: fraction values need to be positive integers"
      )
    ))
  })

  describe('denominator above threshold', () => {
    it('returns an error', () => (
      equal(
        fieldSizeFraction(3)({ fraction: '1/5' }, 'fraction', 'Field').message,
        "Invalid prop `fraction` supplied to `Field`: values needs to be lower or equal to `3`"
      )
    ))
  })

  describe('numerator above denominator', () => {
    it('returns an error', () => (
      equal(
        fieldSizeFraction(3)({ fraction: '3/2' }, 'fraction', 'Field').message,
        "Invalid prop `fraction` supplied to `Field`: numerator needs to be lower or equal to the denominator (`2` in this case)"
      )
    ))
  })

  describe('default', () => {
    it('returns null', () => (
      equal(
        fieldSizeFraction(3)({ fraction: '2/3' }, 'fraction', 'Field'),
        null
      )
    ))
  })
})
