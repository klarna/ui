import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/dropdown.scss'
import find from 'lodash/collection/find'

const classNames = classNamesBind.bind(styles)

export default function Dropdown (props) {
  const {
    selected,
    name,
    error,
    warning,
    label,
    onChange,
    className,
    data,
    loading,
    focused,
    disabled,
    size,
    position,
    ...remainingProps } = props

  const baseClass = 'cui__dropdown--native'
  const cls = classNames(baseClass, className, size, position, {
    'is-selected': selected,
    'is-loading': loading,
    'is-focused': focused,
    'is-disabled': disabled,
    'is-error': !!error,
    'is-warning': !!warning
  })

  const options = data.map(({id, label, description}) => {
    return (
      <option
        key={id}
        value={id}>
        {label}
      </option>
    )
  })

  const problem = error || warning

  return (
    <div className={cls} {...remainingProps}>
      {
        problem && (
          <div className={styles[`${baseClass}__floating-label`]}>
            {problem}
          </div>
        )
      }
      {
        label && !(problem && selected) && (
          <div className={styles[`${baseClass}__label`]}>
            {label}
          </div>
        )
      }
      {
        selected && (
          <div className={styles[`${baseClass}__current-option`]}>
            {find(data, (item) => String(item.id) === String(selected)).label}
          </div>
        )
      }
      <select className={styles[`${baseClass}__select`]}
        name={name}
        onChange={onChange && ((e) => onChange(e.target.value))}
        defaultValue={selected}
        disabled={loading || disabled}>
        {options}
      </select>
    </div>
  )
}

Dropdown.optionSchema = PropTypes.shape({
  id: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
})

Dropdown.sizes = ['quarter', 'half']
Dropdown.positions = ['top', 'bottom', 'center', 'square', 'left', 'right', 'top-left', 'top-right', 'bottom-left', 'bottom-right']

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
  error: PropTypes.string,
  warning: PropTypes.string,
  size: PropTypes.oneOf(Dropdown.sizes),
  position: PropTypes.oneOf(Dropdown.positions)
}
