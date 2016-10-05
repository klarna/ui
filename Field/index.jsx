import React, { PropTypes } from 'react'
import classNamesBind from 'classnames/bind'
import defaultStyles from './styles.scss'
import * as programmaticFocus from '../lib/features/programmaticFocus'
import * as fieldStates from '../lib/features/fieldStates'
import * as inlinedIcon from '../lib/features/inlinedIcon'
import * as stacking from '../lib/features/stacking'
import { handleKeyDown } from '../lib/features/keyboardEvents'
import MouseflowExclude from '../MouseflowExclude'

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

export const icons = inlinedIcon.INLINED_ICONS

export default React.createClass({
  displayName: 'Field',

  getDefaultProps () {
    return {
      big: false,
      centered: false,
      loading: false,
      onChange: function () {},
      responsive: true,
      mouseflowExclude: false,
      ...inlinedIcon.defaultProps,
      ...fieldStates.defaultProps,
      ...stacking.position.defaultProps,
      ...handleKeyDown.defaultProps,
      ...stacking.size.defaultProps
    }
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
    mouseflowExclude: PropTypes.bool,
    responsive: PropTypes.bool,
    value: PropTypes.string,
    styles: PropTypes.object,
    ...inlinedIcon.propTypes,
    ...fieldStates.propTypes,
    ...handleKeyDown.propTypes,
    ...stacking.position.propTypes,
    ...programmaticFocus.propTypes,
    ...stacking.size.propTypes
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
      bottom, // eslint-disable-line no-unused-vars
      center, // eslint-disable-line no-unused-vars
      className,
      centered,
      customize,
      disabled,
      error,
      icon,
      focus,
      label,
      left, // eslint-disable-line no-unused-vars
      loading,
      mouseflowExclude,
      onBlur,
      onChange,
      onClick,
      onEnter, // eslint-disable-line no-unused-vars
      onFocus,
      onTab, // eslint-disable-line no-unused-vars
      responsive,
      right, // eslint-disable-line no-unused-vars
      square,
      value,
      size, // eslint-disable-line no-unused-vars
      style,
      styles,
      top, // eslint-disable-line no-unused-vars
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
        'non-responsive': !responsive,
        square
      },
      fieldStates.getClassName(this.props),
      programmaticFocus.getClassName(this.props),
      stacking.size.getClassName(this.props),
      stacking.position.getClassName(this.props),
      className
    )

    const hasNonDefaultState = disabled || warning || error
    const useDynamicStyles = customize && !hasNonDefaultState

    const dynamicStyles = useDynamicStyles
      ? {
        borderColor: this.state.hover || focus
          ? customize.borderColorSelected
          : customize.borderColor,
        boxShadow: focus && `0 0 4px ${customize.borderColorSelected}`,
        ...stacking.position.getBorderRadii(this.props, customize.borderRadius)
      }
      : undefined

    const labelDynamicStyles = useDynamicStyles
      ? { color: customize.labelColor }
      : undefined

    const inputDynamicStyles = useDynamicStyles
      ? { color: customize.inputColor }
      : {}

    const inputElement = <input
      className={classNames(icon ? classes.iconInput : classes.input)}
      disabled={disabled}
      value={value || ''}
      onBlur={onBlur}
      onChange={onChange}
      onKeyDown={handleKeyDown(this.props)}
      onFocus={onFocus}
      ref='input'
      style={{
        ...inputDynamicStyles,
        ...style
      }}
      {...props}
    />

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
          className={classNames(icon ? classes.iconLabel : classes.label)}
          style={labelDynamicStyles}>
          {label}
        </label>

        {mouseflowExclude
          ? <MouseflowExclude>{inputElement}</MouseflowExclude>
          : inputElement
        }
      </div>
    )
  }
})
