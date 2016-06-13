import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from '@klarna/ui-css-components/src/components/switch.scss'

export default class Switch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: props.checked,
      pressed: false
    }

    this.toggle = this.toggle.bind(this)
    this.press = this.press.bind(this)
    this.release = this.release.bind(this)
  }

  toggle () {
    const checked = !this.state.checked
    this.props.onChange && this.props.onChange(checked)
    this.setState({checked: checked})
  }

  press () {
    this.setState({pressed: true})
  }

  release () {
    this.setState({pressed: false})
  }

  render () {
    const {
      className,
      align,
      children,
      design,
      disabled,
      error,
      legal,
      name,
      styles,
      ...remainingProps } = this.props

    const {
      checked,
      pressed } = this.state

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const cls = classNames('cui__switch', {
      'is-checked': checked,
      'is-pressed': pressed,
      'is-disabled': disabled,
      'is-error': error,
      'right': align === 'right',
      'checkbox': design === 'checkbox',
      legal
    }, className)

    return (
      <div
        className={cls}
        onClick={!disabled && this.toggle}
        onMouseDown={!disabled && this.press}
        onMouseUp={!disabled && this.release}
        {...remainingProps}>
        {children}
        {name &&
          <input name={name} type='hidden' value={checked} />}
      </div>
    )
  }
}

Switch.alignments = ['left', 'right']
Switch.designs = ['switch', 'checkbox']

Switch.defaultProps = {
  design: 'switch',
  checked: false,
  error: false,
  disabled: false,
  align: 'left',
  legal: false
}

Switch.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  legal: PropTypes.bool,
  name: PropTypes.string,
  align: PropTypes.oneOf(Switch.alignments),
  design: PropTypes.oneOf(Switch.designs),
  onChange: PropTypes.func,
  styles: PropTypes.object
}
