import React, { Component, PropTypes } from 'react'
import { Motion, spring } from 'react-motion'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import getActiveElement from '../../lib/getActiveElement'
import debounce from '../../lib/debounce'

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

  if (tab) {
    const { left, width } = tab.getBoundingClientRect()
    const parentLeft = tab.parentNode.getBoundingClientRect().left

    component.setState({ width, left: (left - parentLeft) })
  }
}

export default class Tab extends Component {
  constructor () {
    super()

    this.resizeListener = debounce(() update(this))

    this.state = {
      left: 0,
      width: 0
    }
  }

  componentDidUpdate (prevProps) {
    if (
      this.props.options.length !== prevProps.options.length ||
      this.props.value !== prevProps.value) {
      setTimeout(() => update(this))
    }

    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  }

  componentDidMount (prevProps) {
    setTimeout(() => update(this))

    window.addEventListener('resize', this.resizeListener)

    if (
      this.props.focus &&
      getActiveElement(document) !== this.refs[this.props.focus]
    ) {
      this.refs[this.props.focus].focus()
    }
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.resizeListener)
  }

  resizeListener () {

  }

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
          {(style) => <div style={style} className={defaultStyles[classes.selected]} />}
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
}

Tab.defaultProps = {
  tabDisplay: 'fluid'
}

Tab.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.node.isRequired,
    key: PropTypes.string.isRequired
  })).isRequired,
  className: PropTypes.string,
  id: PropTypes.string,
  tabDisplay: PropTypes.oneOf(tabDisplays),
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  white: PropTypes.bool
}

Tab.displayName = 'Menu.Tab'
