import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/input.scss'

const classNames = classNamesBind.bind(styles)

class Input extends React.Component {

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

    const inputProps = {...this.props, ...{
      onFocus: this.onFocus,
      onBlur: this.onBlur,
      className: inputFinalClassName
    }}

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

Input.sizes = ['big', 'giant']
Input.types = ['text', 'password', 'number', 'email', 'search', 'url']

Input.defaultProps = {
  type: 'text',
  disabled: false
}

Input.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(Input.sizes),
  type: PropTypes.oneOf(Input.types),
  value: PropTypes.string,
  warning: PropTypes.string
}

class StatefullInput extends React.Component {
  constructor(props) {
    super(props)

    this.state = {value: ''}
    this.onChange = this.onChange.bind(this)
  }

  onChange (e) {
    this.setState({value: e.target.value})
    this.props.onChange && this.props.onChange(e)
  }

  render () {
    <Input
      {...this.props}
      value={this.state.value}
      onChange={this.onChange}
    />
  }
}

StatefullInput.propTypes = {
  onChange: PropTypes.func
}

// In standard React terminology:
// - Input is a 'Controlled Component'
// - StatefullInput is an 'Uncontrolled Component'
export default function InputWrapper (props) {
  if (props.value !== undefined) {
    return <Input {...props} />
  } else {
    return <StatefullInput {...props} />
  }
}
