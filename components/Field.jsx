import React, { PropTypes, Component } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/field.scss'
import combinations from '../lib/combinations'
import toObjectWithValue from '../lib/toObjectWithValue'
import fieldSizeFraction from '../propTypes/fieldSizeFraction'
import keyboardEvents from './keyboardEvents'

const classNames = classNamesBind.bind(styles)

export const positions = [
  'bottom',
  'center',
  'left',
  'right',
  'top'
]

export const focusTypes = {
  FAKE: 'fake',
  REAL: 'real'
}

export const states = [
  'disabled',
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

const maybeFocus = ((document) => (type, input) => {
  switch (type) {
    case focusTypes.REAL:
      if (document.activeElement !== input) {
        input.focus()
      }
      break
    case focusTypes.FAKE:
      if (typeof input.scrollIntoViewIfNeeded === 'function') {
        input.scrollIntoViewIfNeeded()
      }
      break
  }
})(document)

export default class Field extends Component {

  componentDidMount () {
    maybeFocus(this.props.focus, this.refs.input)
  }

  componentDidUpdate () {
    maybeFocus(this.props.focus, this.refs.input)
  }

  render () {
    const {
      big,
      children,
      className,
      centered,
      disabled,
      error,
      focus,
      label,
      loading,
      onBlur,
      onChange,
      onClick,
      onEnter,
      onFocus,
      onTab,
      size,
      square,
      value,
      warning,
      ...props
    } = this.props

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
        (children ? 'cui__field--icon' : 'cui__field'), {
          big,
          'is-centered': centered,
          'is-disabled': disabled,
          'is-error': error,
          'is-filled': value != null && value !== '',
          'is-focused': focus,
          'is-warning': warning,
          'is-loading': loading,
          square
        },
        sizesMap[size],
        positionCombination,
        className),
      label: classNames('cui__field__label'),
      input: classNames('cui__field__input')
    }

    return (
      <div
        className={classes.field}
        onClick={onClick}
      >
        {children}

        <label className={classes.label}>{label}</label>

        <input
          className={classes.input}
          disabled={disabled}
          value={value}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
          ref='input'
          {...props}
        />
      </div>
    )
  }
}

Field.defaultProps = {
  big: false,
  centered: false,
  loading: false,
  ...toObjectWithValue(false)(states),
  ...toObjectWithValue(false)(positions),
  size: '1/1'
}

Field.propTypes = {
  big: PropTypes.bool,
  centered: PropTypes.bool,
  loading: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  onFocus: PropTypes.func,
  onEnter: PropTypes.func,
  onTab: PropTypes.func,
  value: PropTypes.string,
  ...toObjectWithValue(PropTypes.bool)(states),
  ...toObjectWithValue(PropTypes.bool)(positions),
  size: fieldSizeFraction(maxSize),
  focus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Object.keys(focusTypes).map((key) => focusTypes[key]))
  ])
}

export const FieldWithKeyEventsCantThinkOfAnythingBetter = keyboardEvents(Field)
