import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/tab-menu.scss'

const classNames = classNamesBind.bind(styles)

export default function TabMenu (props) {
  const {
    className,
    design,
    options,
    name,
    onChange,
    selected,
    ...remainingProps } = props

  const baseClass = 'cui__tab-menu'
  const cls = classNames(baseClass, design, className)
  const tabStyle = design === 'static'
    ? {width: (100 / options.length) + '%'}
    : {}

  const items = options.map(({ key, label }, index) => {
    const id = `${name}-${key}`

    return (
      <div key={index}>
        <input
          className={styles[`${baseClass}__input`]}
          type='radio'
          name={name}
          id={id}
          onChange={onChange && (() => onChange(key))}
          defaultChecked={key === selected}
        />
        <label
          style={tabStyle}
          className={styles[`${baseClass}__button`]}
          htmlFor={id}>
          {label}
        </label>
      </div>
    )
  })

  return (
    <div className={cls} {...remainingProps}>
      {items}
    </div>
  )
}

TabMenu.defaultProps = {
  design: 'fluid'
}

TabMenu.designs = ['fluid', 'static']

TabMenu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  design: PropTypes.oneOf(TabMenu.designs),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string
}
