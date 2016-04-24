import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/input.scss'

const classNames = classNamesBind.bind(styles)

export default class Input extends React.Component {

  constructor (props) {
    super(props)

    this.state = {
      value: props.value || '',
      focused: false
    }

    this.onChange = this.onChange.bind(this)
    this.onFocus = this.onFocus.bind(this)
    this.onBlur = this.onBlur.bind(this)
  }

  onChange (event) {
    this.setState({value: event.target.value})
  }

  onFocus (event) {
    this.setState({focused: true})
    this.props.onFocus && this.props.onFocus()
  }

  onBlur (event) {
    this.setState({focused: false})
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
    const { name, type = 'text', size, disabled = false, error, warning, label } = this.props

    const baseClassName = this.hasIcon() ? 'cui__input--icon' : 'cui__input'

    const cls = classNames(baseClassName, {
      'is-filled': !!this.state.value,
      'is-focused': this.state.focused,
      'big': size === 'big',
      'giant': size === 'giant',
      'is-error': !!error,
      'is-warning': !!warning,
      'is-disabled': !!disabled
    })

    return (
      <div className={cls}>
        {this.renderIcon()}
        <label className={styles[`${baseClassName}__label`]}>
          {error || warning || label}
        </label>
        <input
          name={name}
          type={type}
          disabled={disabled}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
          className={styles[`${baseClassName}__input`]} />
      </div>
    )
  }
}

Input.sizes = ['big', 'giant']
Input.types = ['text', 'password', 'number', 'email', 'search', 'url']

Input.defaultProps = {
  type: 'text',
  disabled: false,
  value: ''
}

Input.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  size: PropTypes.oneOf(Input.sizes),
  type: PropTypes.oneOf(Input.types),
  value: PropTypes.string,
  warning: PropTypes.string
}
