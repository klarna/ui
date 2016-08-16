import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'switch'

const classes = {
  bullet: `${baseClass}__bullet`,
  bulletCheckmark: `${baseClass}__bullet__checkmark`
}

const press = (component) => () => component.setState({ pressed: true })
const release = (component) => () => component.setState({ pressed: false })

export const alignments = ['left', 'right']

export default React.createClass({
  displayName: 'Switch.Toggle',

  defaultProps: {
    error: false,
    disabled: false,
    align: 'left',
    legal: false,
    value: false
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
    legal: PropTypes.bool,
    name: PropTypes.string,
    align: PropTypes.oneOf(alignments),
    onChange: PropTypes.func,
    styles: PropTypes.object,
    value: PropTypes.bool
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
      legal,
      name,
      onChange,
      styles,
      value,
      ...remainingProps } = this.props

    const { pressed } = this.state

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const cls = classNames(baseClass, {
      'is-checked': value,
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

    const onClick = !disabled && onChange && (() => onChange(!value))
    const onMouseDown = !disabled && press(this)
    const onMouseUp = !disabled && release(this)

    return customize
      ? renderDynamicallyStyledSwitch(name, value, children, cls, childCls, onClick, onMouseDown, onMouseUp, customize, {...remainingProps})
      : (
        <div
          className={cls}
          onClick={onClick}
          onMouseDown={onMouseDown}
          onMouseUp={onMouseUp}
          {...remainingProps}>
          {children}
          {name &&
            <input name={name} type='hidden' value={value} />}
        </div>
      )
  }
})

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
