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
    big,
    disabled,
    label,
    loading,
    onChange,
    square,
    selected,
    data,
    ...remainingProps
  } = props

  const classes = {
    field: classNames('cui__dropdown--native', {
        big,
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

  const baseClass = 'cui__dropdown--native'

  const options = data.map(({id, label, description}) => {
    return (
      <option
        key={id}
        value={id}>
        {label}
      </option>
    )
  })

  const problem = props.error || props.warning

  return (
    <div className={classes.field} {...remainingProps}>
      {
        problem && (
          <div className={styles[`${baseClass}__floating-label`]}>
            {label}
          </div>
        )
      }
      {
        label && !(problem && selected) && (
          <label className={classes.label}>{label}</label>
        )
      }
      {
        selected && (
          <div className={styles[`${baseClass}__current-option`]}>
            {getSelectedLabel(data, selected)}
          </div>
        )
      }
      <select className={styles[`${baseClass}__select`]}
        onChange={onChange && ((e) => onChange(e.target.value))}
        defaultValue={selected}
        disabled={loading || disabled}>
        {options}
      </select>
    </div>
  )
}

function getSelectedLabel (data, selected) {
  const selectedItem = data.find((item) => String(item.id) === String(selected))
  return selectedItem ? selectedItem.label : ''
}

Dropdown.optionSchema = PropTypes.shape({
  id: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
})

Dropdown.defaultProps = {
  loading: false,
  ...fieldStates.defaultProps,
  ...position.defaultProps,
  ...size.defaultProps
}

Dropdown.propTypes = {
  label: React.PropTypes.string.isRequired,
  name: React.PropTypes.string,
  selected: React.PropTypes.any,
  onChange: React.PropTypes.func,
  className: PropTypes.string,
  data: PropTypes.arrayOf(Dropdown.optionSchema).isRequired,
  loading: PropTypes.bool,
  focused: PropTypes.bool,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  warning: PropTypes.bool,
  ...position.propTypes,
  ...size.propTypes
}
