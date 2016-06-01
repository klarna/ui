import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/dropdown.scss'

import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import { position, size } from '../lib/features/stacking'

const classNames = classNamesBind.bind(styles)

export default function Dropdown (props) {
  const {
    className,
    data,
    disabled,
    label,
    loading,
    onChange,
    selected,
    square,
    ...remainingProps
  } = props

  const baseClass = 'cui__dropdown--native'

  const classes = {
    field: classNames('cui__dropdown--native',
      {
        'is-loading': loading,
        'is-selected': selected,
        square
      },
      fieldStates.getClassName(props),
      programmaticFocus.getClassName(props),
      size.getClassName(props),
      position.getClassName(props),
      className),
    label: classNames(
      'cui__dropdown--native__label'
    )
  }

  const problem = props.error || props.warning

  return (
    <div className={classes.field} {...remainingProps}>
      {
        problem
          ? <div className={styles[`${baseClass}__floating-label`]}>
            {label}
          </div>
          : <label className={classes.label}>
            {label}
          </label>
      }
      {
        selected && (
          <div className={styles[`${baseClass}__current-option`]}>
            {getSelectedOptionLabel(data, selected)}
          </div>
        )
      }
      <select className={styles[`${baseClass}__select`]}
        onChange={onChange && ((e) => onChange(e.target.value))}
        defaultValue={selected}
        disabled={loading || disabled}>
        {getOptions(data)}
      </select>
    </div>
  )
}

function getSelectedOptionLabel (data, selected) {
  const selectedOption = data.find((option) => String(option.value) === String(selected))
  return selectedOption ? selectedOption.label : ''
}

function getOptions (data) {
  return data.map(({value, label}) => {
    return (
      <option key={value} value={value}>
        {label}
      </option>
    )
  })
}

Dropdown.optionSchema = PropTypes.shape({
  label: PropTypes.string.isRequired,
  value: PropTypes.any.isRequired
})

Dropdown.defaultProps = {
  ...fieldStates.defaultProps,
  ...position.defaultProps,
  ...size.defaultProps
}

Dropdown.propTypes = {
  className: PropTypes.string,
  data: PropTypes.arrayOf(Dropdown.optionSchema),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  focused: PropTypes.bool,
  label: React.PropTypes.string.isRequired,
  loading: PropTypes.bool,
  name: React.PropTypes.string,
  onChange: React.PropTypes.func,
  selected: React.PropTypes.any,
  warning: PropTypes.bool,
  ...position.propTypes,
  ...size.propTypes
}
