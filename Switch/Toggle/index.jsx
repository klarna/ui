import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'switch'

const classes = {
  bullet: `${baseClass}__bullet`,
  bulletToggle: `${baseClass}__bullet__toggle`,
  label: `${baseClass}__label`,
  input: `${baseClass}__input`
}

const press = (component) => () => component.setState({ pressed: true })
const release = (component) => () => component.setState({ pressed: false })

export const alignments = ['left', 'right']

export default React.createClass({
  displayName: 'Switch.Toggle',

  getDefaultProps () {
    return {
      error: false,
      disabled: false,
      align: 'left',
      legal: false,
      value: false
    }
  },

  propTypes: {
    children: PropTypes.node,
    className: PropTypes.string,
    customize: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      bulletColor: PropTypes.string.isRequired
    }),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    focus: PropTypes.bool,
    legal: PropTypes.bool,
    name: PropTypes.string.isRequired,
    align: PropTypes.oneOf(alignments),
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    styles: PropTypes.object,
    value: PropTypes.bool
  },

  componentDidMount () {
    if (this.props.focus && document.activeElement !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  componentDidUpdate () {
    if (this.props.focus && document.activeElement !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  getInitialState () {
    return { pressed: false }
  },

  render () {
    const {
      className,
      align,
      children,
      customize,
      disabled,
      error,
      focus,
      legal,
      name,
      onBlur,
      onChange,
      onFocus,
      styles,
      value,
      ...remainingProps
    } = this.props

    const { pressed } = this.state

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const cls = classNames(baseClass, {
      'is-checked': value,
      'is-focused': focus,
      'is-pressed': pressed,
      'is-disabled': disabled,
      'is-error': error,
      'right': align === 'right',
      legal
    }, className)

    const onMouseDown = !disabled && press(this)
    const onMouseUp = !disabled && release(this)

    return (<div
      className={cls}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...remainingProps}>
      <input
        className={classNames(classes.input)}
        id={name}
        name={name}
        type='checkbox'
        checked={value}
        onBlur={onBlur}
        onChange={() => !disabled && onChange && onChange(!value)}
        onFocus={onFocus}
        ref='input'
      />
      <label
        className={classNames(classes.label)}
        htmlFor={name}
        style={customize ? {
          color: customize.textColor
        } : undefined}>
        <div
          className={classNames(classes.bullet)}
          style={customize && value ? {
            backgroundColor: customize.backgroundColor,
            borderColor: customize.backgroundColor
          } : undefined}
        />
        <div
          className={classNames(classes.bulletToggle)}
          style={customize ? {
            backgroundColor: customize.bulletColor
          } : undefined}
        />
        {children}
      </label>
    </div>)
  }
})
