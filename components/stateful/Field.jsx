import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from '@klarna/ui-css-components/src/components/field.scss'

const classNames = classNamesBind.bind(styles)

export default class StatefulField extends React.Component {

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

    let iconState
    switch (true) {
      case !!error:
        iconState = 'error'
        break
      case !!warning:
        iconState = 'warning'
        break
      case disabled:
        iconState = 'disabled'
        break
      case this.state.focused:
        iconState = 'focused'
        break
    }

    return React.cloneElement(React.Children.only(children), {className: styles['cui__field--icon__icon'], state: iconState})
  }

  render () {
    const { name, type = 'text', size, disabled = false, error, warning, label } = this.props

    const baseClassName = this.hasIcon() ? 'cui__field--icon' : 'cui__field'

    const cls = classNames(baseClassName, {
      'is-filled': !!this.state.value,
      'is-focused': this.state.focused,
      'big': size === 'big',
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

StatefulField.sizes = ['big']
StatefulField.types = ['text', 'password', 'number', 'email', 'search', 'url']

StatefulField.defaultProps = {
  type: 'text',
  disabled: false,
  value: ''
}

StatefulField.propTypes = {
  children: PropTypes.element,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onFocus: PropTypes.func,
  size: PropTypes.oneOf(StatefulField.sizes),
  type: PropTypes.oneOf(StatefulField.types),
  value: PropTypes.string,
  warning: PropTypes.string
}
