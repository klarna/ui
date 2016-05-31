import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/dropdown.scss'

export default function RadioGroup (props) {
  const { selected, onChange, className, data, styles, ...remainingProps } = props
  const baseClass = 'cui__dropdown--radio'
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
  const cls = classNames(baseClass, className)

  const options = data.map(({id, label, description}) => {
    const optionClass = classNames(`${baseClass}__option`, {
      'is-selected': id === selected
    })
    const labelClass = classNames(`${baseClass}__option__heading`)
    const descriptionClass = classNames(`${baseClass}__option__description`)

    return (
      <div key={id} className={optionClass} onClick={() => onChange(id)}>
        <label className={labelClass} style={{display: 'block'}}>{label}</label>
        {description && <div className={descriptionClass}>{description}</div>}
      </div>
    )
  })

  return (
    <div className={cls} {...remainingProps}>
      {options}
    </div>
  )
}

RadioGroup.optionSchema = PropTypes.shape({
  id: PropTypes.any.isRequired,
  label: PropTypes.string.isRequired,
  description: PropTypes.node
})

RadioGroup.propTypes = {
  // Allows any type to be an id, as long as it is comparable
  selected: React.PropTypes.any.isRequired,
  onChange: React.PropTypes.func.isRequired,
  className: PropTypes.string,
  data: PropTypes.arrayOf(RadioGroup.optionSchema).isRequired,
  styles: PropTypes.object
}
