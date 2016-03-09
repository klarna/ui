import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import styles from 'ui-css-components/src/components/switch.scss'

const classNames = classNamesBind.bind(styles)

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
      name,
      ...remainingProps } = this.props

    const {
      checked,
      pressed } = this.state

    const cls = classNames('cui__switch', {
      'is-checked': checked,
      'is-pressed': pressed,
      'is-disabled': disabled,
      'right': align === 'right',
      'checkbox': design === 'checkbox'
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
  disabled: false,
  align: 'left'
}

Switch.propTypes = {
  children: PropTypes.node,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  name: PropTypes.string,
  align: PropTypes.oneOf(Switch.alignments),
  design: PropTypes.oneOf(Switch.designs),
  onChange: PropTypes.func
}
