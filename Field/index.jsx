import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import { position, size } from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'

const baseClass = 'field'

const classes = {
  icon: `${baseClass}--icon`,
  iconIcon: `${baseClass}--icon__icon`,
  iconIconFill: `${baseClass}--icon__icon__fill`,
  iconIconStroke: `${baseClass}--icon__icon__stroke`,
  iconInput: `${baseClass}--icon__input`,
  iconLabel: `${baseClass}--icon__label`,
  input: `${baseClass}__input`,
  label: `${baseClass}__label`
}

export default React.createClass({
  displayName: 'Field',

  defaultProps: {
    big: false,
    centered: false,
    loading: false,
    onChange: function () {},
    ...inlinedIcon.defaultProps,
    ...fieldStates.defaultProps,
    ...position.defaultProps,
    ...handleKeyDown.defaultProps,
    ...size.defaultProps
  },

  propTypes: {
    big: PropTypes.bool,
    centered: PropTypes.bool,
    customize: PropTypes.shape({
      borderColor: PropTypes.string.isRequired,
      borderColorSelected: PropTypes.string.isRequired
    }),
    loading: PropTypes.bool,
    label: PropTypes.string.isRequired,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onClick: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.string,
    styles: PropTypes.object,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...position.propTypes,
    ...programmaticFocus.propTypes,
    ...size.propTypes
  },

  getInitialState () {
    return {
      hover: false
    }
  },

  componentDidMount () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  },

  componentDidUpdate () {
    programmaticFocus.maybeFocus(document)(this.props.focus, this.refs.input)
  },

  onMouseEnter () {
    this.setState({
      ...this.state,
      hover: true
    })
  },

  onMouseLeave () {
    this.setState({
      ...this.state,
      hover: false
    })
  },

  render () {
    const {
      big,
      className,
      centered,
      customize,
      disabled,
      error,
      icon,
      focus,
      label,
      loading,
      onBlur,
      onChange,
      onClick,
      onFocus,
      square,
      value,
      styles,
      warning,
      ...props
    } = this.props
    const classNames = classNamesBind.bind({ ...defaultStyles, ...styles })

    const cls = classNames(
      (icon ? classes.icon : baseClass), {
        big,
        'is-centered': centered,
        'is-filled': value != null && value !== '',
        'is-loading': loading,
        square
      },
      fieldStates.getClassName(this.props),
      programmaticFocus.getClassName(this.props),
      size.getClassName(this.props),
      position.getClassName(this.props),
      className
    )

    const hasNonDefaultState = disabled || warning || error
    const useDynamicStyles = customize && !hasNonDefaultState

    const dynamicStyles = useDynamicStyles
    ? {
      borderColor: this.state.hover || focus ? customize.borderColorSelected : customize.borderColor,
      boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`
    }
    : undefined

    return (
      <div
        className={cls}
        onClick={onClick}
        style={dynamicStyles}
        onMouseEnter={this.onMouseEnter}
        onMouseLeave={this.onMouseLeave}>
        {
          inlinedIcon.renderInlinedIcon(this.props, {
            icon: classNames(classes.iconIcon),
            fill: classNames(classes.iconIconFill),
            stroke: classNames(classes.iconIconStroke)
          })
        }

        <label
          className={classNames(icon ? classes.iconLabel : classes.label)}>
          {label}
        </label>

        <input
          className={classNames(icon ? classes.iconInput : classes.input)}
          disabled={disabled}
          value={value || ''}
          onBlur={onBlur}
          onChange={onChange}
          onKeyDown={handleKeyDown(this.props)}
          onFocus={onFocus}
          ref='input'
          {...props}
        />
      </div>
    )
  }
})
