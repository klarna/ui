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
  displayName: 'Switch.Checkbox',

  defaultProps: {
    error: false,
    disabled: false,
    align: 'left',
    legal: false,
    value: false
  },

  propTypes: {
    align: PropTypes.oneOf(alignments),
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
    onChange: PropTypes.func,
    styles: PropTypes.object,
    value: PropTypes.bool
  },

  getInitialState () {
    return {
      pressed: false
    }
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
      value,
      styles,
      ...remainingProps } = this.props

    const { pressed } = this.state

    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })
    const cls = classNames(baseClass, 'checkbox', {
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
      ? renderDynamicallyStyledCheckbox(name, value, children, cls, childCls, onClick, onMouseDown, onMouseUp, customize, {...remainingProps})
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

const renderDynamicallyStyledCheckbox = (name, checked, children, classNames, childClassNames, onClick, onMouseDown, onMouseUp, { backgroundColor, bulletColor }, remainingProps) => (
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
      className={childClassNames.checkmark}>
      <svg
        width='14px'
        height='14px'
        viewBox='0 0 14 14'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'>
        <g fill='none' fill-rule='evenodd'>
          <rect x='0' y='0' width='14' height='14' rx='2'></rect>
          <path d='M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2'
            stroke={bulletColor} stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'></path>
        </g>
      </svg>
    </div>
    {children}
  </div>
)
