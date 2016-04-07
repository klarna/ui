import {
  composeValidators,
  isDenominatorBelowThreshold,
  isFraction,
  isNumeratorAboveDenominator,
  isPositiveIntegerFraction
} from '../lib/validators'

export default (threshold) => composeValidators(
  isNumeratorAboveDenominator,
  isDenominatorBelowThreshold(threshold),
  isPositiveIntegerFraction,
  isFraction
)
