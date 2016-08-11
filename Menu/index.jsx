import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import segmentedStyles from '@klarna/ui-css-components/src/components/segmentedcontrol.scss'
import tabStyles from '@klarna/ui-css-components/src/components/tab-menu.scss'

const designs = {
  tab: {
    baseClass: 'cui__tab-menu',
    styles: tabStyles
  },
  segmented: {
    baseClass: 'cui__segmentedcontrol',
    styles: segmentedStyles
  }
}

export default function Menu (props) {
  const {
    className,
    design,
    tabDisplay,
    options,
    name,
    onChange,
    onClick,
    selected,
    selectable,
    white,
    children,
    ...remainingProps } = props

  const { baseClass, styles } = designs[design]
  const classNames = classNamesBind.bind(styles)

  const cls = classNames(baseClass, tabDisplay, className, {
    'is-selectable': selectable,
    white
  })

  const tabStyle = tabDisplay === 'static'
    ? {width: (100 / options.length) + '%'}
    : {}

  const items = options.map(({ key, label }, index) => {
    const id = `${name}-${key}`

    const tabClass = classNames(`${baseClass}__button`, {
      left: index === 0,
      center: index > 0 && index < options.length - 1,
      right: index === options.length - 1
    })

    return (
      <div key={index} style={{boxSizing: 'content-box'}}>
        <input
          className={styles[`${baseClass}__input`]}
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

Menu.defaultProps = {
  design: 'tab',
  tabDisplay: 'fluid',
  selectable: true
}

Menu.designs = ['tab', 'segmented']
Menu.tabDisplays = ['fluid', 'static']

Menu.optionsSchema = PropTypes.shape({
  label: PropTypes.node.isRequired,
  key: PropTypes.string.isRequired
})

Menu.propTypes = {
  options: PropTypes.arrayOf(Menu.optionsSchema).isRequired,
  className: PropTypes.string,
  design: PropTypes.oneOf(Menu.designs),
  tabDisplay: PropTypes.oneOf(Menu.tabDisplays),
  onChange: PropTypes.func,
  onClick: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string,
  selectable: PropTypes.bool,
  white: PropTypes.bool,
  children: PropTypes.node
}
