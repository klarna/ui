import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import themeable from '../../decorators/themeable'
import defaultStyles from './styles.scss'

const baseClass = 'switch--checkbox'

const classes = {
  bullet: `${baseClass}__bullet`,
  bulletCheckmark: `${baseClass}__bullet__checkmark`,
  bulletCheckmarkStroke: `${baseClass}__bullet__checkmark__stroke`,
  bulletToggle: `${baseClass}__bullet__toggle`,
  label: `${baseClass}__label`,
  input: `${baseClass}__input`
}

const press = (component) => () => component.setState({ pressed: true })
const release = (component) => () => component.setState({ pressed: false })

export const alignments = ['left', 'right']

const Checkbox = React.createClass({
  displayName: 'Switch.Checkbox',

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
    align: PropTypes.oneOf(alignments),
    children: PropTypes.node,
    className: PropTypes.string,
    customize: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      bulletColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired
    }),
    disabled: PropTypes.bool,
    error: PropTypes.bool,
    focus: PropTypes.bool,
    legal: PropTypes.bool,
    name: PropTypes.string,
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
      value,
      styles,
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
      'dynamic-styling': customize,
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
          style={customize && (value ? {
            backgroundColor: customize.backgroundColor,
            borderColor: customize.backgroundColor,
            boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
          } : {
            borderColor: focus && customize.borderColorSelected,
            boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
          })}></div>
        <div
          className={classNames(classes.bulletToggle)}
          style={customize ? {
            backgroundColor: customize.bulletColor
          } : undefined}
        />
        <svg
          className={classNames(classes.bulletCheckmark)}
          width='14px'
          height='14px'
          viewBox='0 0 14 14'>
          <g fill='none'>
            <rect x='0' y='0' width='14' height='14' rx='2'></rect>
            <path
              className={classNames(classes.bulletCheckmarkStroke)}
              d='M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2'
              style={customize ? {
                stroke: customize.bulletColor
              } : undefined}
            />
          </g>
        </svg>
        {children}
      </label>
    </div>)
  }
})

export default themeable(Checkbox, (customizations, props) => ({
  customize: {
    ...props.customize,
    backgroundColor: customizations.color_checkbox,
    bulletColor: customizations.color_checkbox_checkmark,
    textColor: customizations.color_text,
    borderColorSelected: customizations.color_border_selected
  }
}))
