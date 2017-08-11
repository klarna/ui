import React from 'react'
import PropTypes from 'prop-types'
import classNamesBind from 'classnames/bind'
import setDisplayName from 'recompose/setDisplayName'
import defaultStyles from './styles.scss'
import getActiveElement from '../../lib/getActiveElement'
import childrenPropType from '../../propTypes/children'

import compose from 'ramda/src/compose'
import {
  withOverrideFromContext,
  withTheme,
  withUncontrolledProp,
  withUniqueFormIdentifier
} from '@klarna/higher-order-components'

const baseClass = 'switch--checkbox'

const classes = {
  bullet: `${baseClass}__bullet`,
  bulletCheckmark: `${baseClass}__bullet__checkmark`,
  bulletCheckmarkStroke: `${baseClass}__bullet__checkmark__stroke`,
  bulletCheckmarkFill: `${baseClass}__bullet__checkmark__fill`,
  label: `${baseClass}__label`,
  input: `${baseClass}__input`
}

const press = (component) => () => component.setState({ pressed: true })
const release = (component) => () => component.setState({ pressed: false })

export const alignments = ['left', 'right']

const Checkbox = React.createClass({
  displayName: 'Switch.Checkbox',

  getDefaultProps () {
    return {
      error: false,
      disabled: false,
      align: 'left',
      legal: false,
      value: false
    }
  },

  propTypes: {
    align: PropTypes.oneOf(alignments),
    children: childrenPropType,
    className: PropTypes.string,
    customize: PropTypes.shape({
      backgroundColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired,
      bulletColor: PropTypes.string.isRequired,
      textColor: PropTypes.string.isRequired
    }),
    disabled: PropTypes.bool,
    partial: PropTypes.bool,
    error: PropTypes.bool,
    focus: PropTypes.bool,
    id: PropTypes.string,
    legal: PropTypes.bool,
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    styles: PropTypes.object,
    value: PropTypes.bool
  },

  componentDidMount () {
    if (this.props.focus && getActiveElement(document) !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  componentDidUpdate () {
    if (this.props.focus && getActiveElement(document) !== this.refs.input) {
      this.refs.input.focus()
    }
  },

  getInitialState () {
    return {pressed: false}
  },

  render () {
    const {
      className,
      align,
      children,
      customize,
      disabled,
      partial,
      error,
      focus,
      legal,
      name,
      onBlur,
      onChange,
      onFocus,
      value,
      styles,
      ...remainingProps
    } = this.props

    const {pressed} = this.state

    const classNames = classNamesBind.bind({...defaultStyles, ...styles})
    const cls = classNames(baseClass, {
      'is-checked': value,
      'is-focused': focus && !disabled,
      'is-pressed': pressed,
      'is-disabled': disabled,
      'is-error': error,
      'right': align === 'right',
      'dynamic-styling': customize,
      legal
    }, className)

    const onMouseDown = !disabled && press(this)
    const onMouseUp = !disabled && release(this)

    const ids = {
      bullet: `${name}__bullet`,
      bulletCheckmark: `${name}__bullet__checkmark`,
      label: `${name}__label`,
      wrapper: `${name}__wrapper`
    }

    return (<div
      className={cls}
      id={ids.wrapper}
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      {...remainingProps}>
      <input
        className={classNames(classes.input)}
        id={name}
        name={name}
        type='checkbox'
        checked={value}
        disabled={disabled}
        onBlur={onBlur}
        onChange={() => !disabled && onChange && onChange(!value)}
        onFocus={onFocus}
        ref='input'
      />
      <label
        className={classNames(classes.label)}
        htmlFor={name}
        id={ids.label}
        style={customize && !error && !disabled ? {
          color: customize.textColor
        } : undefined}>
        <div
          className={classNames(classes.bullet)}
          id={ids.bullet}
          style={customize && (value ? {
            backgroundColor: customize.backgroundColor,
            borderColor: customize.backgroundColor,
            boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
          } : {
            borderColor: focus && customize.borderColorSelected,
            boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
          })} />
        <svg
          focusable='false'
          className={classNames(classes.bulletCheckmark)}
          id={ids.bulletCheckmark}
          width='14px'
          height='14px'
          viewBox='0 0 14 14'>
          <g fill='none'>
            <rect x='0' y='0' width='14' height='14' rx='2' />
            <path
              className={classNames(classes.bulletCheckmarkStroke, partial && 'is-hidden')}
              d='M3.8,6.67583361 L6.40484483,9.5982824 L10.7279517,4.2'
              style={customize ? {
                stroke: customize.bulletColor
              } : undefined}
            />
            <rect
              x='3'
              y='6'
              width='8'
              height='2'
              className={classNames(classes.bulletCheckmarkFill, partial || 'is-hidden')}
            />
          </g>
        </svg>
        {children}
      </label>
    </div>)
  }
})

export default compose(
  setDisplayName('Switch.Checkbox'),
  withUncontrolledProp({
    prop: 'focus',
    defaultProp: 'autoFocus',
    handlers: {
      onFocus: () => () => true,
      onBlur: () => () => false
    }
  }),
  withUncontrolledProp({
    prop: 'value',
    defaultProp: 'defaultValue',
    handlers: {
      onChange: () => field => field
    }
  }),
  withTheme((customizations, {customize}) => ({
    customize: {
      backgroundColor: customizations.color_checkbox,
      bulletColor: customizations.color_checkbox_checkmark,
      textColor: customizations.color_text,
      borderColorSelected: customizations.color_border_selected,
      ...customize
    }
  })),
  withUniqueFormIdentifier,
  withOverrideFromContext
)(Checkbox)
