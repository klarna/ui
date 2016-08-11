import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/installments.scss'

const baseClass = 'cui__selector--installments'

export default function Installments (props) {
  const {
    className,
    options,
    name,
    onChange,
    selected,
    styles,
    ...remainingProps } = props

  const classNames = classNamesBind.bind({
    ...defaultStyles,
    ...styles
  })

  const cls = classNames(baseClass, className)

  const items = options.map(({ key, value, info, connector }, index) => {
    const id = `${name}-${key}`

    return [
      (<input
        className={classNames(`${baseClass}__input`)}
        type='radio'
        name={name}
        id={id}
        onChange={onChange && (() => onChange(key))}
        defaultChecked={key === selected} />),
      (<label
        className={classNames(`${baseClass}__label`, 'third')}
        htmlFor={id}>
        <span className={classNames(`${baseClass}__label__value`)}>{value}</span>
        <span className={classNames(`${baseClass}__label__connector`)}>{connector}</span>
        <span className={classNames(`${baseClass}__label__info`)}>{info}</span>
      </label>)
    ]
  })

  return (
    <div className={cls} {...remainingProps}>
      {items.reduce((a, b) => a.concat(b), [])}
    </div>
  )
}

Installments.optionsSchema = PropTypes.shape({
  connector: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  value: PropTypes.node.isRequired
})

Installments.propTypes = {
  options: PropTypes.arrayOf(Installments.optionsSchema).isRequired,
  className: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string
}
