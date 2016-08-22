import React, { PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'tab-menu'

const classes = {
  button: `${baseClass}__button`,
  input: `${baseClass}__input`,
  selected: `${baseClass}__selected`
}

export const tabDisplays = ['fluid', 'static']

const update = (component) => {
  const tab = document.getElementById(
    `${component.props.name}-${component.props.value}-tab`
  )
  const { left, width } = tab.getBoundingClientRect()
  const parentLeft = tab.parentNode.getBoundingClientRect().left

  component.setState({ width, left: (left - parentLeft) })
}

export default React.createClass({
  displayName: 'Menu.Tab',

  defaultProps: {
    tabDisplay: 'fluid'
  },

  propTypes: {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired
    })).isRequired,
    className: PropTypes.string,
    tabDisplay: PropTypes.oneOf(tabDisplays),
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    white: PropTypes.bool
  },

  getInitialState () {
    return { width: 0, left: 0 }
  },

  componentDidUpdate (prevProps) {
    if (
      this.props.options.length !== prevProps.options.length ||
      this.props.value !== prevProps.value) {
      setTimeout(() => update(this))
    }
  },

  componentDidMount (prevProps) {
    setTimeout(() => update(this))
  },

  render () {
    const { left, width } = this.state
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const {
      className,
      tabDisplay,
      options,
      name,
      onChange,
      onClick,
      value,
      white,
      styles,
      ...remainingProps
    } = this.props

    const cls = classNames(baseClass, tabDisplay, { white }, className)

    return (
      <div className={cls} {...remainingProps}>
        <Motion style={{left: spring(left), width: spring(width)}}>
          {(style) => <div style={style} className={defaultStyles[classes.selected]} />}
        </Motion>

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
              defaultChecked={key === value} />),
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
})
