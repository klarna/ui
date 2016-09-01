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
          onClick: () => onChange(key),
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
  onClick,
  selected
}) => [
  <input
    className={classNames(`${baseClass}__option__input`)}
    name={name}
    type='radio'
    value={key}
  />,
  <div
    className={classNames(`${baseClass}__option`, { 'is-selected': selected })}
    onClick={onClick}>
    <div className={classNames(`${baseClass}__option__bullet`)} />
    <div className={classNames(`${baseClass}__option__checkmark`)} />

    <label
      className={classNames(`${baseClass}__option__heading`)}>
      {label}
    </label>

    {description && <div
      className={classNames(`${baseClass}__option__description`)}>
      {description}
    </div>}
  </div>
]
