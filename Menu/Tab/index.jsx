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

const update = function (component) {
  const tab = document.getElementById(
    `${component.props.name}-${component.props.value}-tab`
  )

  if (tab) {
    const { left, width } = tab.getBoundingClientRect()
    const parentLeft = tab.parentNode.getBoundingClientRect().left

    component.setState({ width, left: (left - parentLeft) })
  }
}

export default React.createClass({
  displayName: 'Menu.Tab',

  getDefaultProps () {
    return {
      tabDisplay: 'fluid'
    }
  },

  propTypes: {
    options: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.node.isRequired,
      key: PropTypes.string.isRequired
    })).isRequired,
    className: PropTypes.string,
    tabDisplay: PropTypes.oneOf(tabDisplays),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
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

    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  componentDidMount (prevProps) {
    setTimeout(() => update(this))

    if (
      this.props.focus &&
      document.activeElement !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  },

  render () {
    const { left, width } = this.state
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const {
      className,
      focus,
      tabDisplay,
      options,
      name,
      onBlur,
      onChange,
      onFocus,
      value,
      white,
      styles,
      ...remainingProps
    } = this.props

    const cls = classNames(baseClass, tabDisplay, { white }, className)

    return (
      <div className={cls} {...remainingProps}>
        <Motion style={{left: spring(left), width: spring(width)}}>
          {function (style) {
            return (<div style={style} className={defaultStyles[classes.selected]} />)
          }}
        </Motion>

        {options.map(({ key, label }, index) => {
          const id = `${name}-${key}`

          const tabClass = classNames(classes.button, {
            left: index === 0,
            center: index > 0 && index < options.length - 1,
            right: index === options.length - 1,
            'is-focused': focus === key
          })

          return [
            (<input
              className={classNames(classes.input)}
              type='radio'
              name={name}
              ref={key}
              id={id}
              onBlur={onBlur}
              onChange={onChange && (() => onChange(key))}
              onFocus={(e) => onFocus && onFocus(key, e)}
              checked={key === value}
              value={key}
            />),
            (<label
              id={`${id}-tab`}
              style={tabDisplay === 'static' ? {
                width: `${(100 / options.length)}%`
              } : undefined}
              className={tabClass}
              htmlFor={id}>
              {label}
            </label>)
          ]
        })}
      </div>
    )
  }
})
