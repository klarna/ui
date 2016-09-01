import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'radio'

export default function Radio ({
  borderless,
  className,
  options,
  disabled,
  name,
  onChange,
  styles,
  value,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(baseClass, { borderless, 'is-disabled': disabled }, className)}
      {...remainingProps}>
      {
        options.map(({key, label, description}) => option({
          classNames,
          description,
          key,
          label,
          name,
          onChange: () => onChange(key),
          selected: key === value
        }))
      }
    </div>
  )
}

Radio.propTypes = {
  value: PropTypes.any,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
  name: PropTypes.string,
  options: PropTypes.array.isRequired,
  disabled: PropTypes.bool,
  styles: PropTypes.object
}

const option = ({
  classNames,
  description,
  key,
  label,
  name,
  onChange,
  selected
}) => [
  <input
    className={classNames(`${baseClass}__option__input`)}
    id={`${name}-${key}`}
    name={name}
    type='radio'
    onChange={onChange}
    value={key}
  />,
  <label
    htmlFor={`${name}-${key}`}
    className={classNames(`${baseClass}__option`, { 'is-selected': selected })}>
    <div className={classNames(`${baseClass}__option__bullet`)} />
    <div className={classNames(`${baseClass}__option__checkmark`)} />

    <div
      className={classNames(`${baseClass}__option__heading`)}>
      {label}
    </div>

    {description && <div
      className={classNames(`${baseClass}__option__description`)}>
      {description}
    </div>}
  </label>
]
