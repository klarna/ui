import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'installments'

const classes = {
  input: `${baseClass}__input`,
  label: `${baseClass}__label`,
  labelConnector: `${baseClass}__label__connector`,
  labelInfo: `${baseClass}__label__info`,
  labelValue: `${baseClass}__label__value`
}

export default function Installments (props) {
  const {
    className,
    options,
    name,
    onChange,
    value: selected,
    styles,
    ...remainingProps } = props

  const classNames = classNamesBind.bind({
    ...defaultStyles,
    ...styles
  })

  const cls = classNames(baseClass, className)

  return (
    <div className={cls} {...remainingProps}>
      {options
        .map(({ key, value, info, connector }, index) => {
          const id = `${name}-${key}`

          return [
            (<input
              className={classNames(classes.input)}
              type='radio'
              name={name}
              key={`input-${id}`}
              id={id}
              onChange={onChange && (() => onChange(key))}
              checked={key === selected} />),
            (<label
              key={`label-${id}`}
              className={classNames(classes.label, 'third')}
              htmlFor={id}>
              <span className={classNames(classes.labelValue)}>{value}</span>
              <span className={classNames(classes.labelConnector)}>{connector}</span>
              <span className={classNames(classes.labelInfo)}>{info}</span>
            </label>)
          ]
        })
        .reduce((a, b) => a.concat(b), [])}
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
  value: PropTypes.string
}
