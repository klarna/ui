import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/selector.scss'
import Checkmark from './icons/Checkmark'

const classNames = classNamesBind.bind(styles)

export default function Selector (props) {
  const { selected, onChange, className, data, ...remainingProps } = props
  const baseClass = 'cui__selector--direct'
  const cls = classNames(baseClass, 'title', className)

  const options = data.map((d) => {
    const optionClass = classNames(`${baseClass}__item`)
    const labelClass = classNames(`${baseClass}__label`)
    const iconClass = classNames(`${baseClass}__icon`)

    return (
      <div key={d.id} className={optionClass} onClick={() => onChange(d)}>
        <div className={labelClass} style={{display: 'block'}}>{d.label}</div>
        {d.id === selected ? <Checkmark className={iconClass} color='blue'/> : null}
      </div>
    )
  })

  return (
    <div className={cls} {...remainingProps}>
      {options}
    </div>
  )
}

Selector.optionSchema = PropTypes.shape({
  id: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired
})

Selector.propTypes = {
  // Allows any type to be an id, as long as it is comparable
  selected: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired,
  className: PropTypes.string,
  data: PropTypes.arrayOf(Selector.optionSchema).isRequired
}
