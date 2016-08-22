import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'segmented'

const classes = {
  button: `${baseClass}__button`,
  input: `${baseClass}__input`
}

export const tabDisplays = ['fluid', 'static']

export default function Segmented ({
  className,
  children,
  onChange,
  onClick,
  options,
  name,
  selectable,
  styles,
  tabDisplay,
  value,
  white,
  ...props }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(baseClass, tabDisplay, className, {
    'is-selectable': selectable,
    white
  })

  return (
    <div className={cls} {...props}>
      {children}
      {options.map(({ key, label }, index) => {
        const id = `${name}-${key}`

        const tabClass = classNames(classes.button, {
          left: index === 0,
          center: index > 0 && index < options.length - 1,
          right: index === options.length - 1
        })

        return [
          (<input
            className={classNames(classes.input)}
            type='radio'
            name={name}
            id={id}
            onChange={onChange && (() => onChange(key))}
            checked={key === value} />),
          (<label
            id={`${id}-tab`}
            style={tabDisplay === 'static' ? {
              width: `${(100 / options.length)}%`
            } : undefined}
            className={tabClass}
            onClick={onClick && ((event) => onClick(event))}
            htmlFor={id}>
            {label}
          </label>)
        ]
      })}
    </div>
  )
}

Segmented.defaultProps = {
  selectable: true,
  tabDisplay: 'fluid'
}

Segmented.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    key: PropTypes.string.isRequired
  })).isRequired,
  selectable: PropTypes.bool,
  tabDisplay: PropTypes.oneOf(tabDisplays),
  value: PropTypes.string,
  white: PropTypes.bool
}
