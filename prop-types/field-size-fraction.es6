import {
  composeValidators,
  isDenominatorBelowThreshold,
  isFraction,
  isNumeratorAboveDenominator,
  isPositiveIntegerFraction
} from './helpers/validators'

export default (threshold) => composeValidators(
  isNumeratorAboveDenominator,
  isDenominatorBelowThreshold(threshold),
  isPositiveIntegerFraction,
  isFraction
)
