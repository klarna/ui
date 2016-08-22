import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'

const baseClass = 'switch--checkbox'

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

    const onClick = !disabled && onChange && (() => onChange(!value))
    const onMouseDown = !disabled && press(this)
    const onMouseUp = !disabled && release(this)

    return (<div
      className={cls}
      onClick={onClick}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...remainingProps}>
      <div
        className={classNames(classes.bullet)}
        style={customize ? {
          backgroundColor: customize.backgroundColor,
          borderColor: customize.backgroundColor
        } : undefined}></div>
      <div
        className={classNames(classes.bulletCheckmark)}>
        <svg
          width='14px'
          height='14px'
          viewBox='0 0 14 14'>
          <g fill='none'>
            <rect x='0' y='0' width='14' height='14' rx='2'></rect>
            <path
              d='M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2'
              stroke={customize ? customize.bulletColor : undefined}
            />
          </g>
        </svg>
      </div>
      {children}
    </div>)
  }
})

/*  style={/*{backgroundColor: customize.bulletColor} */
