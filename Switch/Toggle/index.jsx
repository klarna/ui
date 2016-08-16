import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'switch'

const classes = {
  bullet: `${baseClass}__bullet`,
  bulletCheckmark: `${baseClass}__bullet__checkmark`
}

const toggle = (component) => () => {
  const checked = !component.state.checked
  component.props.onChange && component.props.onChange(checked)
  component.setState({ checked })
}

export default class Switch extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      checked: props.checked,
      pressed: false
    }

    this.press = this.press.bind(this)
    this.release = this.release.bind(this)
  }

  componentWillReceiveProps (nextProps) {
    if (this.state.checked !== nextProps.checked) {
      this.setState({
        checked: nextProps.checked
      })
    }
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
      customize,
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
    const cls = classNames(baseClass, {
      'is-checked': checked,
      'is-pressed': pressed,
      'is-disabled': disabled,
      'is-error': error,
      'right': align === 'right',
      'dynamic-styling': customize,
      legal
    }, className)
    const childCls = customize
      ? {
        bullet: classNames(classes.bullet),
        checkmark: classNames(classes.bulletCheckmark)
      }
      : undefined

    const onClick = !disabled && toggle(this)
    const onMouseDown = !disabled && this.press
    const onMouseUp = !disabled && this.release

    return customize
      ? renderDynamicallyStyledSwitch(name, checked, children, cls, childCls, onClick, onMouseDown, onMouseUp, customize, {...remainingProps})
      : renderSwitch(name, checked, children, cls, onClick, onMouseDown, onMouseUp, {...remainingProps})
  }
}

Switch.alignments = ['left', 'right']

Switch.defaultProps = {
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
  customize: PropTypes.shape({
    backgroundColor: PropTypes.string.isRequired,
    bulletColor: PropTypes.string.isRequired
  }),
  disabled: PropTypes.bool,
  error: PropTypes.bool,
  legal: PropTypes.bool,
  name: PropTypes.string,
  align: PropTypes.oneOf(Switch.alignments),
  onChange: PropTypes.func,
  styles: PropTypes.object
}

const renderSwitch = (name, checked, children, classNames, onClick, onMouseDown, onMouseUp, remainingProps) => (
  <div
    className={classNames}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    {...remainingProps}>
    {children}
    {name &&
      <input name={name} type='hidden' value={checked} />}
  </div>
)

const renderDynamicallyStyledSwitch = (name, checked, children, classNames, childClassNames, onClick, onMouseDown, onMouseUp, { backgroundColor, bulletColor }, remainingProps) => (
  <div
    className={classNames}
    onClick={onClick}
    onMouseDown={onMouseDown}
    onMouseUp={onMouseUp}
    {...remainingProps}>
    <div
      className={childClassNames.bullet}
      style={{
        backgroundColor: backgroundColor,
        borderColor: backgroundColor
      }}></div>
    <div
      className={childClassNames.checkmark}
      style={{
        backgroundColor: bulletColor
      }}></div>
    {children}
  </div>
)
