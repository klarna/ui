import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'segmented'

const classes = {
  button: `${baseClass}__button`,
  input: `${baseClass}__input`
}

export default function Segmented ({
  className,
  tabDisplay,
  options,
  name,
  onChange,
  onClick,
  selected,
  selectable,
  white,
  children,
  styles,
  ...remainingProps }) {
  const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

  const cls = classNames(baseClass, tabDisplay, className, {
    'is-selectable': selectable,
    white
  })

  const tabStyle = tabDisplay === 'static'
    ? {width: (100 / options.length) + '%'}
    : {}

  const items = options.map(({ key, label }, index) => {
    const id = `${name}-${key}`

    const tabClass = classNames(classes.button, {
      left: index === 0,
      center: index > 0 && index < options.length - 1,
      right: index === options.length - 1
    })

    return (
      <div key={index} style={{boxSizing: 'content-box'}}>
        <input
          className={classNames(classes.input)}
          type='radio'
          name={name}
          id={id}
          onChange={onChange && (() => onChange(key))}
          defaultChecked={key === selected} />
        <label
          id={`${id}-tab`}
          style={tabStyle}
          className={tabClass}
          onClick={onClick && ((event) => onClick(event))}
          htmlFor={id}>
          {label}
        </label>
      </div>
    )
  })

  return (
    <div className={cls} {...remainingProps}>
      {children}
      {items}
    </div>
  )
}

Segmented.defaultProps = {
  tabDisplay: 'fluid',
  selectable: true
}

Segmented.tabDisplays = ['fluid', 'static']

Segmented.optionsSchema = PropTypes.shape({
  label: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired
})

Segmented.propTypes = {
  options: PropTypes.arrayOf(Segmented.optionsSchema).isRequired,
  className: PropTypes.string,
  tabDisplay: PropTypes.oneOf(Segmented.tabDisplays),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  selectable: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.node
}
