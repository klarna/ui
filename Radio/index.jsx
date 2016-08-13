import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'radio'

export default function Radio ({ value, onChange, className, data, styles, ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(baseClass, className)}
      {...remainingProps}>
      {
        data.map(({id, label, description}) => (
          <Option
            classNames={classNames}
            onClick={() => onChange(id)}
            key={id}
            label={label}
            description={description}
            selected={id === value}
          />
        ))
      }
    </div>
  )
}

Radio.propTypes = {
  value: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired,
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  styles: PropTypes.object
}

function Option ({ classNames, label, description, onClick, selected }) {
  return (
    <div
      className={classNames(`${baseClass}__option`, { 'is-selected': selected })}
      onClick={onClick}>
      <label
        className={classNames(`${baseClass}__option__heading`)}>
        {label}
      </label>

      {description && <div
        className={classNames(`${baseClass}__option__description`)}>
        {description}
      </div>}
    </div>
  )
}

Option.propTypes = {
  classNames: PropTypes.func,
  label: PropTypes.string.isRequired,
  description: PropTypes.node,
  onClick: PropTypes.func,
  selected: PropTypes.any
}
