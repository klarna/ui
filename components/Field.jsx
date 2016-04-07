import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/field.scss'
import fieldSizeFraction from '../prop-types/field-size-fraction'

const classNames = classNamesBind.bind(styles)
const toObjectWithValue = (value) => (list) =>
  list.reduce((accumulator, item) => ({
    ...accumulator,
    [item]: value
  }), {})
const combinations = (xs, ys) =>
  xs
    .map((x) => ys.map((y) => [x, y]))
    .reduce((a, b) => a.concat(b), [])

export const positions = [
  'bottom',
  'center',
  'left',
  'right',
  'top'
]

export const states = [
  'disabled',
  'focus',
  'error',
  'warning'
]

const sizesMap = {
  '1/2': 'half',
  '1/3': 'third',
  '2/3': 'two-thirds',
  '1/4': 'quarter',
  '2/4': 'half',
  '3/4': 'three-quarters',
  '1/5': 'twenty',
  '2/5': 'forty',
  '3/5': 'sixty',
  '4/5': 'eighty'
}

export const maxSize = 5

const prioritizedAllowedPositionCombinations =
  combinations(
    ['bottom', 'top'],
    ['left', 'right']
  )
  .concat(positions.map((x) => [x]))
  .sort((a, b) => a.length < b.length)

export default function Field ({
  big,
  className,
  disabled,
  error,
  focus,
  label,
  size,
  square,
  value,
  warning,
  ...props
}) {
  const positionCombination = (
    prioritizedAllowedPositionCombinations
      .find((combination) =>
        combination.length === 1
          ? props[combination[0]]
          : (props[combination[0]] && props[combination[1]])
      ) || []
  ).join('-')

  const classes = {
    field: classNames(
      'cui__field', {
        big,
        'is-disabled': disabled,
        'is-error': error,
        'is-filled': value != null && value !== '',
        'is-focused': focus,
        'is-warning': warning,
        square
      },
      sizesMap[size],
      positionCombination,
      className),
    label: classNames('cui__field__label'),
    input: classNames('cui__field__input')
  }

  return (
    <div className={classes.field}>
      <label className={classes.label}>{label}</label>

      <input
        className={classes.input}
        disabled={disabled}
        value={value}
      />
    </div>
  )
}

Field.defaultProps = {
  big: false,
  ...toObjectWithValue(false)(states),
  ...toObjectWithValue(false)(positions),
  size: '1/1'
}

Field.propTypes = {
  big: PropTypes.bool,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  ...toObjectWithValue(PropTypes.bool)(states),
  ...toObjectWithValue(PropTypes.bool)(positions),
  size: fieldSizeFraction(maxSize)
}
