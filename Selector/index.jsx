import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import Checkmark from '../icons/Checkmark'

const baseClass = 'selector--direct'

const classes = {
  icon: `${baseClass}__icon`,
  item: `${baseClass}__item`,
  label: `${baseClass}__label`
}

export default function Selector ({
  value,
  onChange,
  className,
  data,
  styles,
  ...remainingProps
}) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  return (
    <div
      className={classNames(baseClass, 'title', className)}
      {...remainingProps}>
      {data.map(({ id, label }) => (
        <Option
          key={id}
          classNames={classNames}
          label={label}
          onClick={() => onChange(id)}
          selected={id === value}
        />
      ))}
    </div>
  )
}

Selector.propTypes = {
  // Allows any type to be an id, as long as it is comparable
  value: React.PropTypes.any,
  onChange: React.PropTypes.func.isRequired,
  className: PropTypes.string,
  data: PropTypes.array.isRequired,
  styles: PropTypes.object
}

function Option ({ classNames, label, selected, onClick }) {
  return (
    <div
      className={classNames(classes.item)}
      onClick={onClick}>
      <div
        className={classNames(classes.label)} >
        {label}
      </div>

      {selected && (
        <Checkmark
          className={classNames(classes.icon)}
          color='blue'
        />
      )}
    </div>
  )
}

Option.propTypes = {
  classNames: PropTypes.func,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  selected: PropTypes.bool
}
