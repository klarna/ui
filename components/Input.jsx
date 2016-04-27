import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/input.scss'

const classNames = classNamesBind.bind(styles)

export class ControlledInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      focused: false
    }

    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onFocus (event) {
    this.props.onFocus && this.props.onFocus(event)
    if (!event.defaultPrevented) {
      this.setState({focused: true})
    }
  }

  onBlur (event) {
    this.props.onBlur && this.props.onBlur(event)
    if (!event.defaultPrevented) {
      this.setState({focused: false})
    }
  }

  hasIcon () {
    return !!this.props.children
  }

  renderIcon () {
    if (!this.hasIcon()) {
      return null
    }

    const { children, disabled, error, warning } = this.props

    let iconColor
    switch (true) {
      case !!error:
        iconColor = 'red'
        break
      case !!warning:
        iconColor = 'orange'
        break
      case disabled:
        iconColor = 'gray'
        break
      case this.state.focused:
        iconColor = 'blue'
        break
    }

    return React.cloneElement(React.Children.only(children), {className: styles['cui__input--icon__icon'], color: iconColor})
  }

  render () {
    const { size, value, label, error, warning, disabled, className } = this.props
    const baseClassName = this.hasIcon() ? 'cui__input--icon' : 'cui__input'

    const cls = classNames(baseClassName, size, {
      'is-focused': this.state.focused,
      'is-filled': !!value,
      'is-error': !!error,
      'is-warning': !!warning,
      'is-disabled': !!disabled
    })

    const inputClassName = styles[`${baseClassName}__input`]
    const inputFinalClassName = className
      ? `${className} ${inputClassName}`
      : inputClassName

    const { children, ...otherProps } = this.props // eslint-disable-line no-unused-vars
    const inputProps = Object.assign(otherProps, {
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      className: inputFinalClassName
    })

    return (
      <div className={cls}>
        {this.renderIcon()}
        <label className={styles[`${baseClassName}__label`]}>
          {error || warning || label}
        </label>
        <input {...inputProps} />
      </div>
    )
  }
}

ControlledInput.sizes = ['big', 'giant']
ControlledInput.types = ['text', 'password', 'number', 'email', 'search', 'url', 'tel']

ControlledInput.defaultProps = {
  type: 'text',
  disabled: false
}

ControlledInput.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(ControlledInput.sizes),
  type: PropTypes.oneOf(ControlledInput.types),
  value: PropTypes.string,
  warning: PropTypes.string
}

export class UncontrolledInput extends React.Component {
  constructor (props) {
    super(props)

    this.state = { value: props.defaultValue }
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({value: e.target.value})
    this.props.onChange && this.props.onChange(e)
  }

  render () {
    return <ControlledInput
      {...this.props}
      value={this.state.value}
      onChange={this.onChange}
    />
  }
}

UncontrolledInput.propTypes = {
  onChange: PropTypes.func
}

export default function Input (props) {
  if (props.value !== undefined) {
    return <ControlledInput {...props} />
  } else {
    return <UncontrolledInput {...props} />
  }
}
