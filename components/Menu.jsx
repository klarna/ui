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
    selected,
    ...remainingProps } = props

  const { baseClass, styles } = designs[design]
  const classNames = classNamesBind.bind(styles)

  const cls = classNames(baseClass, tabDisplay, className)
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
      <div key={index}>
        <input
          className={styles[`${baseClass}__input`]}
          type='radio'
          name={name}
          id={id}
          key={`input-${index}`}
          onChange={onChange && (() => onChange(key))}
          defaultChecked={key === selected}
        />
        <label
          style={tabStyle}
          className={tabClass}
          key={`label-${index}`}
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

Menu.defaultProps = {
  design: 'tab',
  tabDisplay: 'fluid'
}

Menu.designs = ['tab', 'segmented']
Menu.tabDisplays = ['fluid', 'static']

Menu.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    key: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  design: PropTypes.oneOf(Menu.designs),
  tabDisplay: PropTypes.oneOf(Menu.tabDisplays),
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  selected: PropTypes.string
}
