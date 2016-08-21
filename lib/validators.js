export const composeValidators = (...validators) => (...values) =>
  validators.reduceRight(
    (accumulator, validator) => accumulator || validator(...values),
    null
  )

const any = (...conditions) => conditions.reduce((a, b) => a || b)

export const isFraction = (props, propName, componentName) => {
  const values = props[propName].toString().split('/')

  return any(
    values.length !== 2,
    isNaN(values[0]),
    isNaN(values[1])
  )
  ? new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`: needs to be a fraction, such as \`1/3\``)
  : undefined
}


export const isPositiveIntegerFraction = (props, propName, componentName) => {
  const values = props[propName].split('/')
  const notAPositiveInteger = (value) => /[^0-9]/.test(value)

  return any(
    notAPositiveInteger(values[0]),
    notAPositiveInteger(values[1]),
    parseInt(values[0], 10) === 0,
    parseInt(values[1], 10) === 0
  )
  ? new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`: fraction values need to be positive integers`)
  : undefined
}

export const isDenominatorBelowThreshold = (threshold) => (props, propName, componentName) => {
  const denominator = parseInt(props[propName].split('/')[1], 10)

  return denominator > threshold
  ? new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`: values needs to be lower or equal to \`${threshold}\``)
  : undefined
}

export const isNumeratorAboveDenominator = (props, propName, componentName) => {
  const [numerator, denominator] = props[propName].split('/').map((value) => parseInt(value, 10))

  return numerator > denominator
  ? new Error(`Invalid prop \`${propName}\` supplied to \`${componentName}\`: numerator needs to be lower or equal to the denominator (\`${denominator}\` in this case)`)
  : undefined
}
